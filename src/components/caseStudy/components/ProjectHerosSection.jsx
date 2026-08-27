import React, { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getYoutubeEmbed } from "./youtubeEmbed";

/**
 * Hero media rules:
 * - Showcase + YouTube → video in hero (no hero images required)
 * - More than 1 image → image carousel in hero (classic & showcase)
 * - Else → single hero/gallery image
 */
export const ProjectHerosSection = ({ data }) => {
  const baseURL = process.env.REACT_APP_URL;
  const isShowcase = data?.detailLayout === "showcase";
  const embed = isShowcase ? getYoutubeEmbed(data?.youtubeUrl) : null;

  const imageIds = useMemo(() => {
    const ids = [];
    if (data?.hero) ids.push(String(data.hero));
    (data?.gallery || []).forEach((id) => {
      const s = String(id);
      if (s && !ids.includes(s)) ids.push(s);
    });
    return ids;
  }, [data?.hero, data?.gallery]);

  const [index, setIndex] = useState(0);

  const go = (dir) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return imageIds.length - 1;
      if (next >= imageIds.length) return 0;
      return next;
    });
  };

  const showVideo = Boolean(embed);
  const showCarousel = !showVideo && imageIds.length > 1;
  const showSingle = !showVideo && imageIds.length === 1;

  return (
    <div className="w-full flex justify-start items-center flex-col">
      <div className="w-full rounded-2xl mb-7 overflow-hidden border border-night-black">
        {showVideo && (
          <div className="case-hero-media">
            <iframe
              className="case-carousel-video"
              src={embed}
              title="Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {showCarousel && (
          <div className="case-hero-media case-carousel relative">
            <div
              className="case-carousel-image"
              style={{
                backgroundImage: `url(${baseURL}/file/${imageIds[index]})`,
              }}
              role="img"
              aria-label={`Project image ${index + 1}`}
            />
            <button
              type="button"
              className="case-carousel-nav case-carousel-prev"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="case-carousel-nav case-carousel-next"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
            <div className="case-carousel-dots" aria-hidden="true">
              {imageIds.map((id, i) => (
                <button
                  key={id}
                  type="button"
                  className={`case-carousel-dot ${i === index ? "is-active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {showSingle && (
          <div
            className="case-hero-media"
            style={{
              backgroundImage: `url(${baseURL}/file/${imageIds[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}

        {!showVideo && !showCarousel && !showSingle && (
          <div className="case-hero-media case-hero-empty">
            <p className="text-mute text-sm">No media added</p>
          </div>
        )}
      </div>

      <div className="case-meta-row">
        <div className="case-meta-item">
          <span className="case-meta-label">Client</span>
          <span className="case-meta-value">{data?.clientName || "—"}</span>
        </div>
        <div className="case-meta-item">
          <span className="case-meta-label">Services</span>
          <span className="case-meta-value">{data?.techStack || "—"}</span>
        </div>
        <div className="case-meta-item">
          <span className="case-meta-label">Duration</span>
          <span className="case-meta-value">{data?.duration || "—"}</span>
        </div>
      </div>
    </div>
  );
};
