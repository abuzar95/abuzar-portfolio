import React from "react";
import { SkillRatingsSlider } from "./SkillRatingsSlider";

export const Technologies = ({ data }) => {
  console.log(data, "123");
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="w-full font-bold text-white mb-5">Technologies</h1>
      {data?.map((i) => {
        if (i?.name?.skillName) {
          return (
            <SkillRatingsSlider
              skillValue={i?.level}
              skillName={i?.name?.skillName}
            />
          );
        }
      })}
    </div>
  );
};

// import React from "react";
// import { SkillRatingsSlider } from "./SkillRatingsSlider";
// import { softwareHouseTechnologies } from "../../../assets/icons/Icons";

// export const Technologies = ({ data }) => {
//   console.log(data);
//   return (
//     <div className="w-full flex flex-col gap-5">
//     <h1 className="w-full font-bold text-white mb-5">Technologies</h1>
//     {data?.map((technology) => {
//       // Find the icon for the current technology
//       const matchedIcon = softwareHouseTechnologies.find(icon => icon.name.toLowerCase() === technology?.name?.skillName.toLowerCase());

//       return (
//         <div key={technology._id} className="flex items-center gap-2">
//           {matchedIcon && matchedIcon.icon} {/* Render the icon if found */}
//           <SkillRatingsSlider skillValue={30} skillName={technology?.name?.skillName} />
//         </div>
//       );
//     })}
//   </div>
//   );
// };
