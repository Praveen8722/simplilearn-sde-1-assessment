import Image from "next/image";

import Button from "@/components/ui/Button";
import { landingPageData } from "@/data/landingPage";

export default function FutureBright() {
  const { futurebright  } = landingPageData;

  return (
    <section
      id="feature"
      className="bg-white px-5 py-16 md:px-8 lg:px-0 lg:py-20"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:flex-row md:gap-16 lg:gap-20">
        {/* Image */}
        <div className="flex w-full justify-center md:w-[40%]">
          <img
            src="https://faheemonhub.github.io/Nexcent-Figma/assets/pana.svg"
            alt="Feature illustration"
            className="h-auto w-full max-w-[440px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[60%]">
          <h2 className="max-w-[700px] text-3xl font-semibold leading-tight text-[#4D4D4D] md:text-4xl lg:text-[40px]">
            {futurebright .title}
          </h2>

          <p className="mt-5 max-w-[750px] text-base leading-6 text-[#717171] md:text-[17px] md:leading-7">
            {futurebright .description}
          </p>

          <div className="mt-8">
            <Button
              label={futurebright .button.label}
              href={futurebright .button.href}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
