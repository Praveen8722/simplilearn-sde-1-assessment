import Image from "next/image";

import { landingPageData } from "@/data/landingPage";

export default function Testimonial() {
  const { testimonial } = landingPageData;

  return (
    <section className="bg-[#F5F7FA] px-5 py-12 md:px-8 lg:px-0">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-center">
        {/* Testimonial Image */}
        <div className="flex w-full justify-center md:w-[35%]">
          <img
            src="https://faheemonhub.github.io/Nexcent-Figma/assets/image%209.png"
            alt="Testimonial"
            className="h-auto w-full max-w-[408px] rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[65%]">
          {/* Quote */}
          <p className="text-base leading-7 text-[#717171] md:text-[17px]">
            {testimonial.quote}
          </p>

          {/* Author */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-[#4CAF50]">
              {testimonial.author.name}
            </h3>

            <p className="mt-2 text-base text-[#8993A4]">
              {testimonial.author.company}
            </p>
          </div>

          {/* Customer logos */}
          <div className="mt-8 flex flex-wrap items-center gap-7">
            {testimonial.customers.map((customer) => (
              <Image
                key={customer.id}
                src={customer.src}
                alt={customer.alt}
                width={48}
                height={48}
                className="h-10 w-auto object-contain md:h-11"
              />
            ))}

            {/* Meet all customers */}
            <a
              href={testimonial.link.href}
              className="ml-0 flex items-center gap-3 text-base font-medium text-[#4CAF50] md:ml-2 md:text-lg"
            >
              <span>{testimonial.link.label}</span>

              <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
