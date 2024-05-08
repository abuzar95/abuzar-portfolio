import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

export const Doughnut = ({
  cutout,
  width,
  height,
  fontSize,
  skillRate,
  skillName,
}) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(incrementCount, 0);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Increment the count by 1
  const incrementCount = () => {
    setCount((prevCount) => {
      if (prevCount < skillRate) {
        return prevCount + 1;
      } else {
        return prevCount;
      }
    });
  };

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "# of Votes",
              data: [skillRate, 100 - skillRate],
              backgroundColor: ["#00BC91", "#212223"],
              borderColor: ["#00BC91", "#7a7a7a"],
              borderWidth: 2,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              enabled: false, // Disable tooltips
            },
            legend: {
              display: true, // Display legend
            },
          },
          cutout: `${cutout}%`, // Adjust the size of the inner circle (doughnut hole)
          responsive: true, // Make the chart responsive
          maintainAspectRatio: false, // Ensure the chart fills its container
          elements: {
            line: {
              borderWidth: 1, // Adjust the width of the lines
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart instance when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className=" w-full flex justify-start items-center flex-col">
      <div
        style={{
          width: ` ${width}px`,
          height: `${height}px`,
          margin: "auto",
          position: "relative",
          marginBottom: fontSize ? "1rem" : "10px",
        }}
      >
        <canvas
          ref={chartContainer}
          className="flex justify-center items-center"
        />
        <p
          className="absolute top-4 left-4 text-primary font-extrabold"
          style={{
            fontSize: `${fontSize}px` || "24px",
            top: fontSize ? "40%" : "",
            left: fontSize ? "36%" : "",
            color: fontSize ? "white" : ""
          }}
        >
          {count}%
        </p>
      </div>
      <h1 style={{ fontSize: "18px", fontWeight: "lighter" }} className="capitalize">
        {skillName}
      </h1>
    </div>
  );
};
