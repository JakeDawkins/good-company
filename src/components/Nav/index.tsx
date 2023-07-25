import Link from 'next/link';

export default function Nav() {
  return (
    <div className="flex flex-row justify-center">
      <Link
        className="mx-4 border-b border-b-gray-800 hover:font-bold w-16 text-center"
        href="/"
      >
        Home
      </Link>
      <Link
        className="mx-4 border-b border-b-gray-800 hover:font-bold w-16 text-center"
        href="/about"
      >
        About
      </Link>
      <Link
        className="mx-4 border-b border-b-gray-800 hover:font-bold w-16 text-center"
        href="/menu"
      >
        Menu
      </Link>
    </div>
  );
}
