import React, { useRef, useEffect, useState, useCallback } from "react";
import Chart from "chart.js/auto";

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

  const incrementCount = useCallback(() => {
    setCount((prevCount) => {
      if (prevCount < skillRate) {
        return prevCount + 1;
      }
      return prevCount;
    });
  }, [skillRate]);

  useEffect(() => {
    const intervalId = setInterval(incrementCount, 0);
    return () => {
      clearInterval(intervalId);
    };
  }, [incrementCount]);

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
              backgroundColor: ["#069C7A", "#212223"],
              borderColor: ["#069C7A", "#3b3b3b"],
              borderWidth: 2,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              display: true,
            },
          },
          cutout: `${cutout}%`,
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            line: {
              borderWidth: 1,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [cutout, skillRate]);

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
            color: fontSize ? "white" : "",
          }}
        >
          {count}%
        </p>
      </div>
      <h1
        style={{ fontSize: "18px", fontWeight: "lighter" }}
        className="capitalize"
      >
        {skillName}
      </h1>
    </div>
  );
};
