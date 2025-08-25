export function GradientButton({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a href={href} className="rounded-2xl bg-gradient-to-r from-[#FFB800] to-[#E73331] px-6 py-3 font-semibold text-white shadow-sm hover:opacity-90">
      {children}
    </a>
  );
}