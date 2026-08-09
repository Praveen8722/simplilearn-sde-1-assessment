"use client";

import Image from "next/image";
import { landingPageData } from "@/data/landingPage";

export default function Footer() {
  const footer = landingPageData.footer;

  return (
    <footer className="bg-[#263238] px-5 py-12 text-white md:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">

        {/* Brand */}
        <div>
          <Image
            src={footer.logo.src}
            alt={footer.logo.alt}
            width={190}
            height={50}
            className="h-auto w-[190px]"
          />

          {/* Copyright */}
          <div className="mt-10 space-y-2 text-sm text-[#F5F7FA]">
            {footer.copyright.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-4">
            {footer.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full colore- bg-[#3B474C] transition hover:bg-[#4CAF50]"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Company + Support */}
        {footer.columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-xl font-semibold">
              {column.title}
            </h3>

            <ul className="mt-7 space-y-4">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-[#F5F7FA] transition hover:text-[#4CAF50]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold">
            {footer.newsletter.title}
          </h3>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="relative mt-7"
          >
            <input
              type="email"
              placeholder={footer.newsletter.placeholder}
              className="w-full rounded-lg bg-[#515B60] px-4 py-4 pr-14 text-sm text-white outline-none placeholder:text-[#D9D9D9] focus:ring-2 focus:ring-[#4CAF50]"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-white"
            >
              →
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}