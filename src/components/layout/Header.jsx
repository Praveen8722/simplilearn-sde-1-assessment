import Link from "next/link";

import { landingPageData } from "@/data/landingPage";

export default function Header() {
  const { header } = landingPageData;

  return (
    <header className="w-full bg-[#F5F7FA]">
      <div className="mx-auto flex h-[84px] max-w-[1200px] items-center justify-between px-5 md:px-8 lg:px-0">

        {/* Logo */}
        <Link
          href={header.logo.href}
          className="flex items-center gap-2"
        >
          <img
            src="https://faheemonhub.github.io/Nexcent-Figma/assets/Icon.svg"
            alt="Nexcent"
            className="h-8 w-8"
          />

          <span className="text-2xl font-bold text-[#263238]">
            Nexcent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {header.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base text-[#18191F] transition-colors hover:text-[#4CAF50]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href={header.login.href}
            className="text-base font-medium text-[#4CAF50] transition-colors hover:text-[#388E3C]"
          >
            {header.login.label}
          </Link>

          <Link
            href={header.signup.href}
            className="rounded-md bg-[#4CAF50] px-6 py-2 text-base font-medium text-white transition-colors hover:bg-[#43A047]"
          >
            {header.signup.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span className="h-0.5 w-6 bg-[#4D4D4D]" />
          <span className="h-0.5 w-6 bg-[#4D4D4D]" />
          <span className="h-0.5 w-6 bg-[#4D4D4D]" />
        </button>

      </div>
    </header>
  );
}