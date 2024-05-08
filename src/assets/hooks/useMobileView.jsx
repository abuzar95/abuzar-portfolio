import { useState, useEffect } from "react";

/**
 * A custom hook that returns true if the window width is less than a specified breakpoint.
 * @param {number} breakpoint The max width in pixels below which the device is considered as mobile.
 * @returns {boolean} True if the current window width is less than the breakpoint.
 */
function useMobileView(breakpoint = 768) {
  // State to store whether the view is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]); // Empty array ensures that effect is only run on mount and unmount

  return isMobile;
}

export default useMobileView;
