import Image from "next/image";

import { landingPageData } from "@/data/landingPage";
import Button from "@/components/ui/Button";
import SliderDots from "@/components/ui/SliderDots";

export default function Hero() {
  const { hero } = landingPageData;

  return (
    <section id="home" className="bg-[#F5F7FA]">
      <div className="mx-auto flex min-h-[650px] max-w-[1200px] flex-col items-center justify-center gap-10 px-5 py-16 md:flex-row md:gap-12 md:px-8 lg:px-0 lg:py-20">
        {/* Left Content */}
        <div className="w-full md:w-[55%]">
          <h1 className="max-w-[700px] text-5xl font-semibold leading-[1.15] tracking-[-1px] text-[#4D4D4D] sm:text-6xl lg:text-[63px]">
            {hero.title}
            <br />

            <span className="text-[#4CAF50]">{hero.highlight}</span>
          </h1>

          <p className="mt-6 max-w-[650px] text-base leading-7 text-[#717171] md:text-lg">
            {hero.description}
          </p>

          <div className="mt-8">
            <Button label={hero.button.label} href={hero.button.href} />
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex w-full justify-center md:w-[45%] md:justify-end">
          <img
            src="https://faheemonhub.github.io/Nexcent-Figma/assets/Illustration.svg"
            alt="Nexcent illustration"
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>
      </div>

      {/* Slider Dots */}
      <div className="pb-5">
        <SliderDots slides={hero.slides} />
      </div>
    </section>
  );
}
