import React from "react";
import "./Stepper.css";
import { useData } from "../../../DataContext";
import DOMPurify from "dompurify";
import { formatHighlightedText } from "./richText";

export const Stepper = ({ projectName, title = "Overview" }) => {
  const { data } = useData();
  const normalized = (projectName || "").toLowerCase().trim();
  const project = data?.projects?.find(
    (i) =>
      i?.projectName?.trim()?.toLowerCase() === normalized ||
      i?.projectName?.trim()?.toLowerCase()?.replace(/\s+/g, "-") ===
        normalized.replace(/\s+/g, "-")
  );

  const raw = String(project?.description || "").trim();
  if (!raw) return null;

  const looksLikeHtml = /<\/?[a-z][\s\S]*>/i.test(raw);
  let html;
  if (looksLikeHtml) {
    html = DOMPurify.sanitize(raw, { ADD_ATTR: ["class"] })
      .replace(
        /\[\[(.+?)\]\]/g,
        '<mark class="case-highlight">$1</mark>'
      )
      .replace(/\*\*(.+?)\*\*/g, '<mark class="case-highlight">$1</mark>');
  } else {
    html = formatHighlightedText(raw).replace(/\n/g, "<br />");
  }

  return (
    <section className="case-block">
      <header className="case-block-head">
        <p className="case-eyebrow">Details</p>
        <h3 className="case-block-title">
          <span className="case-block-title-accent">{title}</span>
        </h3>
      </header>
      <div
        className="case-prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
};
