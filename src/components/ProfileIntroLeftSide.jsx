import React, { useEffect, useMemo } from "react";
import Typed from "typed.js";
import { useData } from "../DataContext";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaSkype } from "react-icons/fa";
import { getPlatformIcon } from "../utils/platformIcons";

export const ProfileIntroLeftSide = () => {
  const { data } = useData();
  const baseURL = process.env.REACT_APP_URL;

  const typedRoles = useMemo(() => {
    const nominated =
      data?.skills
        ?.filter(
          (s) =>
            s?.featured ||
            (Number(s?.typedOrder) >= 1 && Number(s?.typedOrder) <= 5)
        )
        ?.slice()
        ?.sort(
          (a, b) =>
            (Number(a?.typedOrder) || 99) - (Number(b?.typedOrder) || 99)
        )
        ?.map((s) => s?.title?.skillName)
        ?.filter(Boolean)
        ?.slice(0, 5) || [];

    if (nominated.length) return nominated;
    return ["AI Engineer", "Full Stack Developer"];
  }, [data?.skills]);

  useEffect(() => {
    const el = document.getElementById("typed");
    if (!el) return undefined;
    const typed = new Typed("#typed", {
      strings: typedRoles,
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 1600,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, [typedRoles]);

  const handleDownload = () => {
    if (data?.devCV) {
      window.open(data.devCV, "_blank", "noopener,noreferrer");
    }
  };

  const phoneHref = data?.phoneNo
    ? `tel:${String(data.phoneNo).replace(/\s+/g, "")}`
    : undefined;

  return (
    <div className="w-full z-20 rounded-2xl bg-primaryDark border border-night-black flex justify-center items-center p-4 overflow-hidden xl:fixed xl:max-w-[21rem] relative">
      <div className="flex w-full flex-col justify-start items-center gap-3 p-1 pt-6">
        <div
          className="rounded-full relative border-8 border-night-black flex justify-center items-center overflow-hidden"
          style={{ width: "130px", height: "130px" }}
        >
          <img
            src={data?.avatar ? `${baseURL}/file/${data.avatar}` : undefined}
            alt={data?.name || "Avatar"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className="w-full flex justify-start items-center flex-col gap-2 min-h-[56px]">
          <h4 className="font-bold text-ink text-xl text-center">
            {data?.name}
          </h4>
          <div className="w-full flex justify-center items-center text-center">
            <span
              className="text-secondary text-sm inline-block"
              id="typed"
            />
          </div>
        </div>

        <hr className="w-full" style={{ borderTop: "1px solid #3b3b3b" }} />

        <div className="w-full flex justify-start items-center flex-col gap-2">
          <div className="w-full flex justify-between items-center gap-2">
            <span className="text-xs font-semibold tracking-wide text-ink">
              COUNTRY
            </span>
            <p className="text-primary text-sm">{data?.country}</p>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <span className="text-xs font-semibold tracking-wide text-ink">
              CITY
            </span>
            <p className="text-primary text-sm">{data?.city}</p>
          </div>
          {data?.languages?.length > 0 && (
            <div className="w-full flex justify-between items-start gap-2">
              <span className="text-xs font-semibold tracking-wide text-ink shrink-0">
                LANGUAGE
              </span>
              <p className="text-primary text-sm text-right capitalize leading-5">
                {data.languages.join(", ")}
              </p>
            </div>
          )}
        </div>

        <div className="w-full flex flex-col gap-3 mt-1">
          {data?.email && (
            <a
              href={`mailto:${data.email}`}
              className="w-full flex items-center gap-3 text-sm text-primary hover:text-secondary transition-colors"
            >
              <AiOutlineMail className="text-secondary shrink-0" size={16} />
              <span className="break-all">{data.email}</span>
            </a>
          )}
          {data?.phoneNo && (
            <a
              href={phoneHref}
              className="w-full flex items-center gap-3 text-sm text-primary hover:text-secondary transition-colors"
            >
              <FiPhoneCall className="text-secondary shrink-0" size={16} />
              <span>{data.phoneNo}</span>
            </a>
          )}
          {data?.skype && (
            <div className="w-full flex items-center gap-3 text-sm text-primary">
              <FaSkype className="text-secondary shrink-0" size={16} />
              <span className="break-all">{data.skype}</span>
            </div>
          )}
        </div>

        {data?.links?.length > 0 && (
          <div className="w-full rounded-xl bg-[#2a2b2c] border border-night-black p-3 mt-1">
            <p className="text-xs font-semibold text-ink mb-3">Platforms</p>
            <div className="w-full grid grid-cols-4 gap-3 place-items-center">
              {data.links.map((link, index) => {
                if (!link?.url || !link?.title) return null;
                const Icon = getPlatformIcon(link.title);
                return (
                  <a
                    key={`${link.title}-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                    aria-label={link.title}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    <Icon size={26} />
                  </a>
                );
              })}
            </div>
          </div>
        )}

        <button
          type="button"
          className="w-full flex justify-center uppercase items-center bg-secondary text-white py-3 font-bold px-5 rounded-full hover:opacity-90 transition disabled:opacity-50"
          onClick={handleDownload}
          disabled={!data?.devCV}
        >
          <span className="mr-2">Download CV</span>
          <AiOutlineCloudDownload className="text-ink text-2xl" />
        </button>
      </div>
    </div>
  );
};
