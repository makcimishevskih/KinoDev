import { useEffect, useState } from "react";

const useVisibilityleByTimer = (timeMS: number) => {
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      const id = setTimeout(() => {
         setIsVisible(false);
      }, timeMS);

      return () => clearTimeout(id);
   }, []);

   return { isVisible };
};

export default useVisibilityleByTimer;
