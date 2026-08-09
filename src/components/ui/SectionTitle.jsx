export default function SectionTitle({
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-semibold text-[#4D4D4D] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-base text-[#717171] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}