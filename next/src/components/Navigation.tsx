import Link from "next/link";

export default function Navigation() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Kultur Photo Club
          </Link>
        </div>

        {/* Navigation centrale */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Contact à droite */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
