import React from "react";

/**
 * Supports theme highlights via **text** or [[text]].
 * Escapes HTML first, then applies highlight spans.
 */
export const formatHighlightedText = (raw = "") => {
  const escaped = String(raw)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(
      /\[\[(.+?)\]\]/g,
      '<mark class="case-highlight">$1</mark>'
    )
    .replace(
      /\*\*(.+?)\*\*/g,
      '<mark class="case-highlight">$1</mark>'
    );
};

export const RichText = ({ text, as: Tag = "span", className = "" }) => {
  if (!text) return null;
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: formatHighlightedText(text) }}
    />
  );
};
