interface SectionTitleProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  light?: boolean;
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
  light = false,
}: SectionTitleProps) {
  return (
    <Tag
      className={`text-2xl font-semibold uppercase tracking-wide md:text-3xl lg:text-4xl ${
        light ? "text-white" : "text-text-primary"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
