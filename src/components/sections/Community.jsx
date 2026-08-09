import Image from "next/image";

import { landingPageData } from "@/data/landingPage";

export default function Community() {
  const { community } = landingPageData;

  return (
    <section
      id="service"
      className="bg-white px-5 py-14 md:px-8 lg:px-0"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mx-auto max-w-[750px] text-center">
          <h2 className="text-3xl font-semibold leading-tight text-[#4D4D4D] md:text-4xl lg:text-[40px]">
            {community.title}
          </h2>

          <p className="mt-4 text-base text-[#717171]">
            {community.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {community.cards.map((card) => (
            <article
              key={card.id}
              className="flex min-h-[330px] flex-col items-center rounded-lg border border-[#F0F0F0] bg-white px-8 py-8 text-center shadow-sm"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#E8F5E9]">
                <Image
                  src={card.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="max-w-[280px] text-2xl font-semibold leading-tight text-[#4D4D4D] md:text-[28px]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-[310px] text-base leading-6 text-[#717171]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}