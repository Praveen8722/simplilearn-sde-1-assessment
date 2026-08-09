import Image from "next/image";

import { landingPageData } from "@/data/landingPage";

export default function Clients() {
  const { clients } = landingPageData;

  return (
    <section className="bg-white px-5 py-12 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#4D4D4D] md:text-4xl">
            {clients.title}
          </h2>

          <p className="mt-3 text-base text-[#8c8b8b]">{clients.description}</p>
        </div>

        {/* Client Logos */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-8">
          {[
            "https://faheemonhub.github.io/Nexcent-Figma/assets/Logo.svg",
            "https://faheemonhub.github.io/Nexcent-Figma/assets/Logo%20(1).svg",
            "https://faheemonhub.github.io/Nexcent-Figma/assets/Logo%20(2).svg",
            "https://faheemonhub.github.io/Nexcent-Figma/assets/Logo%20(3).svg",
            "https://faheemonhub.github.io/Nexcent-Figma/assets/Logo%20(4).svg",
            "https://faheemonhub.github.io/Nexcent-Figma/assets/Logo%20(5).svg",
            "https://faheemonhub.github.io/Nexcent-Figma/assets/Logo%20(6).svg",
          ].map((src, index) => (
            <div
              key={src}
              className="flex h-12 w-20 items-center justify-center md:w-24"
            >
              <img
                src={src}
                alt={`Client logo ${index + 1}`}
                className="h-auto max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
