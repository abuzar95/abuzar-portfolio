import React from "react";
import { RichText } from "./richText";

/** Renders problem/solution as paragraph or styled bullet list */
export const ContentBlock = ({ title, eyebrow, block }) => {
  if (!block) return null;

  const format = block.format === "bullets" ? "bullets" : "paragraph";
  const hasParagraph =
    format === "paragraph" && String(block.text || "").trim();
  const items = (block.items || [])
    .map((i) => String(i || "").trim())
    .filter(Boolean);
  const hasBullets = format === "bullets" && items.length > 0;

  if (!hasParagraph && !hasBullets) return null;

  return (
    <section className="case-block">
      <header className="case-block-head">
        {eyebrow ? <p className="case-eyebrow">{eyebrow}</p> : null}
        <h3 className="case-block-title">
          <span className="case-block-title-accent">{title}</span>
        </h3>
      </header>

      {hasParagraph ? (
        <RichText
          as="p"
          className="case-block-text"
          text={block.text}
        />
      ) : (
        <ul className="case-block-list">
          {items.map((item, index) => (
            <li key={`${title}-${index}`}>
              <span className="case-bullet-mark" aria-hidden="true" />
              <RichText as="span" className="case-bullet-copy" text={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
