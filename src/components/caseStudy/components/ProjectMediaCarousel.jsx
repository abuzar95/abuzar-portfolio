import React, { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getYoutubeEmbed } from "./youtubeEmbed";

export const ProjectMediaCarousel = ({ gallery = [], youtubeUrl = "", baseURL }) => {
  // Kept for possible reuse; hero now owns video/carousel display.
  const slides = useMemo(() => {
    const list = [];
    (gallery || []).forEach((id) => {
      if (id) list.push({ type: "image", src: `${baseURL}/file/${id}` });
    });
    const embed = getYoutubeEmbed(youtubeUrl);
    if (embed) list.push({ type: "video", src: embed });
    return list;
  }, [gallery, youtubeUrl, baseURL]);

  const [index, setIndex] = useState(0);

  if (!slides.length) return null;

  const go = (dir) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  const current = slides[index];

  return (
    <section className="case-block">
      <header className="case-block-head">
        <p className="case-eyebrow">Media</p>
        <h3 className="case-block-title">
          <span className="case-block-title-accent">Gallery</span>
        </h3>
      </header>
      <div className="case-carousel">
        <div className="case-carousel-frame">
          {current.type === "image" ? (
            <div
              className="case-carousel-image"
              style={{ backgroundImage: `url(${current.src})` }}
              role="img"
              aria-label={`Project slide ${index + 1}`}
            />
          ) : (
            <iframe
              className="case-carousel-video"
              src={current.src}
              title="Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              className="case-carousel-nav case-carousel-prev"
              onClick={() => go(-1)}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="case-carousel-nav case-carousel-next"
              onClick={() => go(1)}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
            <div className="case-carousel-dots" aria-hidden="true">
              {slides.map((slide, i) => (
                <button
                  key={`${slide.type}-${i}`}
                  type="button"
                  className={`case-carousel-dot ${i === index ? "is-active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
