import Image from "next/image";

import { landingPageData } from "@/data/landingPage";

export default function Statistics() {
  const { statistics } = landingPageData;

  return (
    <section className="bg-[#F5F7FA] px-5 py-16 md:px-8 lg:px-0 lg:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 md:flex-row md:items-center">

        {/* Left */}
        <div className="w-full md:w-1/2">
          <h2 className="max-w-[500px] text-3xl font-semibold leading-tight text-[#4D4D4D] md:text-4xl">
            {statistics.titleBefore}
            <br />

            <span className="text-[#4CAF50]">
              {statistics.titleHighlight}
            </span>
          </h2>

          <p className="mt-5 text-base text-[#414142] ">
            {statistics.description}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:w-1/2">
          {statistics.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#4D4D4D] md:text-3xl">
                  {item.value}
                </p>

                <p className="mt-1 text-base text-[#717171]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}