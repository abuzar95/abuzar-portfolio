import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { useData } from "../DataContext";

export const MobileContactBar = () => {
  const { data } = useData();
  if (!data?.email && !data?.phoneNo) return null;

  const phoneHref = data?.phoneNo
    ? `tel:${String(data.phoneNo).replace(/\s+/g, "")}`
    : undefined;

  return (
    <div className="xl:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[9998] w-[min(92vw,420px)]">
      <div className="flex items-center justify-between gap-2 rounded-full border border-night-black bg-primaryDark/95 backdrop-blur-md px-3 py-2 shadow-lg">
        {data?.email && (
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 text-xs text-ink hover:text-secondary px-2 py-1 rounded-full transition-colors"
            aria-label="Email"
          >
            <AiOutlineMail className="text-secondary" size={16} />
            <span className="truncate max-w-[140px]">Email</span>
          </a>
        )}
        {data?.phoneNo && (
          <a
            href={phoneHref}
            className="flex items-center gap-2 text-xs text-ink hover:text-secondary px-2 py-1 rounded-full transition-colors"
            aria-label="Phone"
          >
            <FiPhoneCall className="text-secondary" size={16} />
            <span className="truncate max-w-[120px]">Call</span>
          </a>
        )}
        <button
          type="button"
          onClick={() => {
            const section = document.getElementById("contact");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-xs font-semibold uppercase bg-secondary text-white px-3 py-2 rounded-full hover:brightness-110 transition"
        >
          Message
        </button>
      </div>
    </div>
  );
};
