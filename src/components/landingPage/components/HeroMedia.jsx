import React, { useMemo } from "react";

export const getYouTubeId = (url = "") => {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/,
    /^([A-Za-z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
};

const HeroFallbackAnimation = ({ name }) => {
  const chips = useMemo(
    () => ["React", "Node", "API", "UI", "Cloud", "Ship"],
    []
  );

  return (
    <div className="hero-media-shell hero-fallback" aria-hidden="true">
      <div className="hero-orbit hero-orbit-a" />
      <div className="hero-orbit hero-orbit-b" />
      <div className="hero-core">
        <div className="hero-core-pulse" />
        <span className="hero-core-label">
          {(name || "DEV").slice(0, 1).toUpperCase()}
        </span>
      </div>
      <div className="hero-terminal">
        <div className="hero-terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <p className="hero-terminal-line">
          <span className="text-secondary">const</span> craft = () =&gt; {"{"}
        </p>
        <p className="hero-terminal-line indent">
          return <span className="hero-string">&quot;beautiful products&quot;</span>;
        </p>
        <p className="hero-terminal-line">{"}"};</p>
        <p className="hero-terminal-line">
          craft<span className="hero-cursor">_</span>
        </p>
      </div>
      <div className="hero-chip-cloud">
        {chips.map((chip, index) => (
          <span
            key={chip}
            className={`hero-chip hero-chip-${index + 1}`}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
};

export const HeroMedia = ({ videoUrl, name }) => {
  const videoId = useMemo(() => getYouTubeId(videoUrl), [videoUrl]);

  if (videoId) {
    return (
      <div className="hero-media-shell hero-video-wrap">
        <iframe
          title="Introduction video"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="hero-video-frame"
        />
      </div>
    );
  }

  return <HeroFallbackAnimation name={name} />;
};
