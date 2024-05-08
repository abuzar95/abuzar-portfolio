import React from "react";

export const ButtonWithIcon = ({ text, Icon }) => {
  return (
    <div className="w-full">
      <button style={{fontWeight: '400'}} className="btn bg-transparent  py-2 px-6 rounded-full border-night-black uppercase text-primary">
        <span>
          <Icon className="text-secondary" />
        </span>
        {text}
      </button>
    </div>
  );
};
