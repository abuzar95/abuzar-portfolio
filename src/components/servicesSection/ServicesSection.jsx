import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ServiceCard } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { FaChevronLeft, FaChevronRight, FaShoppingBag } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { useData } from "../../DataContext";
import { softwareHouseTechnologies } from "../../assets/icons/Icons";

const resolveSkillIcon = (skillName = "") => {
  const matched = softwareHouseTechnologies.find(
    (tech) => tech.name.toLowerCase() === skillName.toLowerCase()
  );
  return matched?.icon || null;
};

export const ServicesSection = ({ compact = false }) => {
  const { data } = useData();
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const hintShownRef = useRef(false);

  const services = useMemo(() => data?.services ?? [], [data?.services]);
  const skills = useMemo(() => data?.skills ?? [], [data?.skills]);

  const skillLoop = useMemo(() => {
    if (!skills.length) return [];
    const copies = skills.length < 8 ? 4 : 2;
    return Array.from({ length: copies }, () => skills).flat();
  }, [skills]);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollByCard = useCallback((direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(340, el.clientWidth * 0.8) * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
    setShowScrollHint(false);
  }, []);

  // When user scrolls into services section, show left/right hint once
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || !services.length) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hintShownRef.current) {
          hintShownRef.current = true;
          setShowScrollHint(true);
          window.setTimeout(() => setShowScrollHint(false), 4200);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [services.length]);

  const onWheel = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
      setShowScrollHint(false);
    }
  };

  const onPointerDown = (e) => {
    const el = scrollerRef.current;
    if (!el || e.target.closest("button")) return;
    isDraggingRef.current = true;
    dragStartX.current = e.clientX;
    dragScrollLeft.current = el.scrollLeft;
    el.classList.add("is-dragging");
    el.setPointerCapture?.(e.pointerId);
    setShowScrollHint(false);
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const el = scrollerRef.current;
    if (!el) return;
    const walk = (e.clientX - dragStartX.current) * 1.2;
    el.scrollLeft = dragScrollLeft.current - walk;
  };

  const endDrag = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const el = scrollerRef.current;
    el?.classList.remove("is-dragging");
    try {
      el?.releasePointerCapture?.(e.pointerId);
    } catch (_) {
      /* ignore */
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`w-full flex justify-start items-start flex-col ${
        compact
          ? "px-3 sm:px-4 py-2"
          : "xl:px-8 lg:px-8 md:px-8 sm:px-5 xs:px-5 xss:px-5 py-4"
      }`}
    >
      {!compact && (
        <>
          <ButtonWithIcon Icon={FaShoppingBag} text={"Services"} />
          <Heading prefix={"My"} postfix={"Services"} />
          <p className="text-md text-primary leading-7 mb-6 max-w-3xl">
            Explore what I offer, then see the skills behind the work.
          </p>
        </>
      )}

      {services.length > 0 ? (
        <div className="services-scroller-wrap w-full">
          {showScrollHint && (
            <div className="services-scroll-hint" aria-hidden="true">
              <div className="services-scroll-hint-inner">
                <span className="hint-arrow hint-left">
                  <FaChevronLeft />
                </span>
                <div className="hint-hand" />
                <span className="hint-arrow hint-right">
                  <FaChevronRight />
                </span>
              </div>
              <p>Scroll left or right to browse services</p>
            </div>
          )}

          <button
            type="button"
            className="services-nav-btn services-nav-left"
            aria-label="Scroll services left"
            onClick={() => scrollByCard(-1)}
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollerRef}
            className="services-scroller"
            aria-label="Services carousel"
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {services.map((obj) => (
              <ServiceCard
                key={obj?._id || obj?.name}
                title={obj?.name}
                description={obj?.description}
                icon={obj?.icon}
                onHire={scrollToContact}
              />
            ))}
          </div>

          <button
            type="button"
            className="services-nav-btn services-nav-right"
            aria-label="Scroll services right"
            onClick={() => scrollByCard(1)}
          >
            <FaChevronRight />
          </button>
        </div>
      ) : (
        <p className="text-md text-primary leading-6 mb-4">
          Services will appear here once added from the admin panel.
        </p>
      )}

      {skills.length > 0 && (
        <div className="w-full mt-8 pt-6 border-t border-night-black">
          <p className="text-sm uppercase tracking-[0.16em] text-secondary mb-4">
            Skills I work with
          </p>
          <div className="skills-marquee" aria-label="Skills ticker">
            <div
              className="skills-marquee-track"
              style={{
                animationDuration: `${Math.max(skills.length * 2.2, 14)}s`,
              }}
            >
              {skillLoop.map((skill, index) => {
                const name = skill?.title?.skillName || "Skill";
                const icon = resolveSkillIcon(name);
                return (
                  <div
                    key={`${skill?.title?._id || name}-${index}`}
                    className="services-skill-chip"
                    title={name}
                  >
                    <span className="services-skill-icon">
                      {icon
                        ? React.cloneElement(icon, {
                            style: { width: 18, height: 18 },
                          })
                        : (
                            <HiOutlineSparkles size={18} />
                          )}
                    </span>
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
