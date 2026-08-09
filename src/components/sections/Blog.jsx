import Image from "next/image";

import { landingPageData } from "@/data/landingPage";

export default function Blog() {
  const { blog } = landingPageData;

  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:px-0 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="text-3xl font-semibold text-[#4D4D4D] md:text-4xl lg:text-[40px]">
            {blog.title}
          </h2>

          <p className="mt-4 text-base text-[#717171]">{blog.description}</p>
        </div>

        {/* Blog Cards */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-7">
          {blog.posts.map((post) => (
            <article key={post.id} className="relative pb-20">
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="h-[250px] w-full object-cover"
                />
              </div>

              {/* Card */}
              <div className="absolute left-1/2 top-[238px] w-[90%] -translate-x-1/2 rounded-lg bg-[#F5F7FA] px-5 py-5 text-center shadow-[0_8px_20px_rgba(0,0,0,0.10)]">
                <h3 className="min-h-[96px] text-xl font-semibold leading-8 text-[#717171]">
                  {post.title}
                </h3>

                <a
                  href={post.link.href}
                  className="mt-5 inline-flex items-center gap-3 text-lg font-semibold text-[#4CAF50] transition hover:gap-4"
                >
                  <span>{post.link.label}</span>
                  <span className="text-2xl">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
