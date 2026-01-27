import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex flex-row justify-center gap-8 py-2 md:py-6">
      <Link
        className="text-slate uppercase tracking-wider text-sm font-medium border-b-2 border-transparent hover:border-sage hover:text-darkGreen transition-all duration-200 pb-1"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-slate uppercase tracking-wider text-sm font-medium border-b-2 border-transparent hover:border-sage hover:text-darkGreen transition-all duration-200 pb-1"
        href="/about"
      >
        About
      </Link>
      <Link
        className="text-slate uppercase tracking-wider text-sm font-medium border-b-2 border-transparent hover:border-sage hover:text-darkGreen transition-all duration-200 pb-1"
        href="/menu"
      >
        Menu
      </Link>
    </nav>
  );
}
