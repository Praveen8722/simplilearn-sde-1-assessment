export default function SliderDots({ slides }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {slides.map((slide) => (
        <span
          key={slide.id}
          className={`h-2.5 w-2.5 rounded-full ${
            slide.active
              ? "bg-[#4CAF50]"
              : "bg-[#C8E6C9]"
          }`}
        />
      ))}
    </div>
  );
}