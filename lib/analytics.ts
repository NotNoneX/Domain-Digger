import { usePlausible } from 'next-plausible';
import posthog from 'posthog-js';
import { useCallback, useMemo } from 'react';

type EmptyEvent = Record<string, never>;

type Events = {
  'Copy Button: Click': { value: string };
  'Feedback: Negative': EmptyEvent;
  'Feedback: Neutral': EmptyEvent;
  'Feedback: Positive': EmptyEvent;
  'IP Details: Open': { ip: string };
  'Location Selector: Change': { location: string };
  'Outbound Link: Click': { url: string };
  'Resolver Selector: Change': { resolver: string };
  'Search Form: Click Suggestion': { domain: string; isExample: boolean };
  'Search Form: Submit': { domain: string };
  'Share: Click': { url: string };
  'Star Reminder: Click': EmptyEvent;
  'Star Reminder: Show': EmptyEvent;
  'Star Reminder: Suppress': EmptyEvent;
  'Trace: Click': { type: string; domain: string };
};

export const useAnalytics = () => {
  const plausible = usePlausible();

  const reportEvent = useCallback(
    <T extends keyof Events>(event: T, props: Events[T]) => {
      plausible(event, { props });
      posthog.capture(event, props);
    },
    [plausible],
  );

  return useMemo(
    () => ({
      reportEvent,
    }),
    [reportEvent],
  );
};
