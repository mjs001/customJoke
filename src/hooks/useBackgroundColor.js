import { useEffect, React } from "react";
const useBackgroundColor = (color) => {
  useEffect(() => {
    return (document.body.style.background = color);
  });
};

export default useBackgroundColor;
