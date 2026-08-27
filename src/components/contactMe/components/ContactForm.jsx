import React from "react";
import { SendMessage } from "./SendMessage";
import { useData } from "../../../DataContext";

export const ContactForm = () => {
  const { data } = useData();
  const locationLabel = [data?.city, data?.country].filter(Boolean).join(", ");

  return (
    <div className="w-full flex md:flex-row flex-col justify-start items-start gap-8">
      <div className="w-full md:w-[40%] flex flex-col justify-start items-start gap-3">
        <p className="text-ink text-lg font-semibold">Let&apos;s talk</p>
        <p className="text-primary text-sm leading-6">
          Prefer email or a call? Use the contact details on the profile card,
          or send a message here.
        </p>
        {locationLabel && (
          <p className="text-primary text-sm">
            Based in <span className="text-ink">{locationLabel}</span>
          </p>
        )}
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-7 justify-start items-start mb-5">
        <SendMessage />
      </div>
    </div>
  );
};
