import React from "react";
import { getServiceIcon } from "../../../utils/serviceIcons";

export const ServiceCard = ({ title, description, icon, onHire }) => {
  const Icon = getServiceIcon(icon);
  const bullets = String(description || "")
    .split(/[\n•|-]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="service-scroll-card group">
      <div className="service-scroll-icon">
        <Icon size={28} />
      </div>
      <h3 className="text-ink text-xl font-semibold mb-2 leading-snug">
        {title}
      </h3>
      {bullets.length > 1 ? (
        <ul className="service-scroll-list">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-primary text-sm leading-6 mb-4">{description}</p>
      )}
      <button
        type="button"
        className="mt-auto self-start text-sm uppercase tracking-wide text-secondary border border-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors"
        onClick={onHire}
      >
        Discuss this
      </button>
    </div>
  );
};
