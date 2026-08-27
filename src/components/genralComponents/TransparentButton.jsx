import React from "react";

export const TransparentButton = ({ text, rating }) => {
  return (
    <div className="w-auto mb-5">
      <button className="btn py-1 px-6 rounded-full text-sm text-ink border-night-black border-dashed bg-secondary/20 capitalize hover:bg-secondary hover:text-white hover:border-secondary">
        {`${text} (${rating})`}
      </button>
    </div>
  );
};
