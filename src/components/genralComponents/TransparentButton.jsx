import React from "react";

export const TransparentButton = ({ text, rating }) => {
  return (
    <div className="w-auto mb-5">
      <button className="btn py-1 px-6 rounded-full text-sm text-white border-night-black border-dashed bg-[#069c7a7a] capitalize	hover:text-[#069c7aff] hover:border-[#069c7aff]">
        {`${text} (${rating})`}
      </button>
    </div>
  );
};
