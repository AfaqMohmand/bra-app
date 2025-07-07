import Link from "next/link";
import Image from "next/image";
interface NavbarLinksProps {
  logoSrc: string;
  isMobile: boolean;
  toggleMenu: () => void;
}

export default function NavbarLinks({
  logoSrc,
  isMobile,
  toggleMenu,
}: NavbarLinksProps) {
  // This component handles the navigation links and logo display
  return (
    <>
      <nav className="w-full py-2 px-6 md:px-12 flex justify-between items-center bg-white shadow-sm relative z-20">
        <div className="flex items-center">
          <Image
            src={logoSrc}
            alt="Logo"
            width={40}
            height={20}
            className="h-6 md:h-8 w-auto"
          />
        </div>

        {isMobile ? (
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        ) : (
          <div className="flex items-center">
            <Link
              href="/"
              className="px-4 py-2 text-black hover:text-yellow-500 font-medium transition-colors duration-300"
              style={{ color: "var(--color-black)" }}
            >
              Home
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
