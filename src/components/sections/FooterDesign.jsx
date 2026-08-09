import Image from "next/image";

import Button from "@/components/ui/Button";
import { landingPageData } from "@/data/landingPage";

export default function FooterDesign() {
  const { footerDesign } = landingPageData;

  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:px-0 lg:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:flex-row md:gap-16 lg:gap-20">

        {/* Illustration */}
        <div className="flex w-full justify-center md:w-[40%]">
          <Image
            src={footerDesign.image.src}
            alt={footerDesign.image.alt}
            width={440}
            height={500}
            className="h-auto w-full max-w-[440px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[60%]">
          <h2 className="max-w-[700px] text-3xl font-semibold leading-tight text-[#4D4D4D] md:text-4xl lg:text-[40px]">
            {footerDesign.title}
          </h2>

          <p className="mt-5 max-w-[750px] text-base leading-6 text-[#717171] md:text-[17px] md:leading-7">
            {footerDesign.description}
          </p>

          <div className="mt-8">
            <Button
              label={footerDesign.button.label}
              href={footerDesign.button.href}
            />
          </div>
        </div>

      </div>
    </section>
  );
}