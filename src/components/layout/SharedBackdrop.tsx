import type { ReactNode } from "react";

export function SharedBackdropRoot({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`shared-backdrop-root relative ${className}`}>
      <div className="shared-backdrop-root__bg" aria-hidden />
      {children}
    </div>
  );
}

type SharedBackdropPanelVariant = "burgundy-tint" | "cream-tint" | "transparent";

export function SharedBackdropPanel({
  variant,
  children,
  className = "",
  as: Tag = "section",
}: {
  variant: SharedBackdropPanelVariant;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  return (
    <Tag
      className={`shared-backdrop-panel shared-backdrop-panel--${variant} relative ${className}`}
    >
      {variant !== "transparent" && (
        <div className="shared-backdrop-panel__overlay absolute inset-0" aria-hidden />
      )}
      <div className="shared-backdrop-panel__content relative z-10">{children}</div>
    </Tag>
  );
}
