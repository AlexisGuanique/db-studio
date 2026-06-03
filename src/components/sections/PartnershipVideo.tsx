interface PartnershipVideoProps {
  src: string;
  poster?: string;
  ariaLabel: string;
  className?: string;
}

export function PartnershipVideo({
  src,
  poster,
  ariaLabel,
  className = "",
}: PartnershipVideoProps) {
  return (
    <div className={`partnership-video ${className}`.trim()}>
      <div className="partnership-video__frame">
        <video
          className="partnership-video__player"
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          controlsList="nodownload"
          aria-label={ariaLabel}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
