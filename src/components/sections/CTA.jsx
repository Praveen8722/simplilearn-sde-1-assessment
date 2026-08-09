import { landingPageData } from "@/data/landingPage";

export default function CTA() {
  const cta = landingPageData.cta;

  return (
    <section className="bg-[#F5F7FA] px-5 py-16 md:py-20 lg:py-10 mt-15">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <h2 className="max-w-[900px] text-4xl font-semibold leading-tight text-[#263238] md:text-5xl lg:text-[60px] lg:leading-[1.2]">
          {cta.title}
        </h2>

        <a
          href={cta.button.href}
          className="mt-10 inline-flex items-center gap-3 rounded-md bg-[#4CAF50] px-10 py-2 text-lg font-medium text-white transition hover:bg-[#43A047]"
        >
          <span>{cta.button.label}</span>
          <span className="text-2xl">→</span>
        </a>
      </div>
    </section>
  );
}
