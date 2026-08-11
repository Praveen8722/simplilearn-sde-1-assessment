import Link from "next/link";

export default function Button({
  label,
  href,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-[#4CAF50] text-white hover:bg-[#43A047]",
    secondary:
      "border border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-8 py-8   text-base font-medium transition-colors duration-200 ${styles[variant]}`}
    >
      {label}
    </Link>
  );
}