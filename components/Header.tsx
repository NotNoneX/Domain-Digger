import Link from 'next/link';

import ThemeMenu from '@/components/ThemeMenu';

const Header = () => (
  <header className="w-full p-4 md:px-8">
    <div className="flex items-center justify-between pb-4">
      <Link className="flex items-center gap-2" href="/">
        <img className="inline h-6" src="/icon.svg" alt="" /> Domain Digger
      </Link>
      <ThemeMenu />
    </div>
  </header>
);

export default Header;
