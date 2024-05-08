import "./Background.css";

export const BackgroundImage = () => {
  return (
    <div className="w-full  h-screen flex justify-between items-start fixed top-0 left-0  z-10">
      <div className="w-[2px] border border-dotted border-night-black h-screen relative"></div>
      <div className="w-[2px] border border-dotted border-night-black h-screen relative">
        <div style={{ "--isci": "30s" }} className="animate-custom"></div>
      </div>
      <div className="w-[2px] border border-dotted border-night-black h-screen relative">
        <div style={{ "--isci": "20s" }} className="animate-reverse"></div>
      </div>
      <div className="w-[2px] border border-dotted border-night-black h-screen relative">
        <div style={{ "--isci": "40s" }} className="animate-custom"></div>
      </div>
      <div className="w-[2px] border hidden lg:block  border-dotted border-night-black h-screen relative">
        <div style={{ "--isci": "40s" }} className="animate-custom"></div>
      </div>

      <div className="w-[2px] border border-dotted border-night-black h-screen relative"></div>
    </div>
  );
};
