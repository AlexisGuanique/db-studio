interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: "video" | "square" | "portrait" | "landscape";
  className?: string;
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[2/3]",
  landscape: "aspect-[3/2]",
};

export function ImagePlaceholder({
  label = "Image",
  aspectRatio = "landscape",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg border-2 border-dashed border-burgundy/30 bg-cream/50 ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span className="px-4 text-center text-sm font-medium uppercase tracking-wider text-burgundy/60">
        {label}
      </span>
    </div>
  );
}
