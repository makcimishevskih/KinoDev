import { motion } from "framer-motion";

export const transition = (FMComponent: any) => {
   return () => (
      <>
         <FMComponent />
         <motion.div
            className="slide_in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{
               duration: 1,
               ease: [0.22, 1, 0.4, 1],
            }}
         />
         <motion.div
            className="slide_out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{
               duration: 1,
               ease: [0.22, 1, 0.4, 1],
            }}
         />
      </>
   );
};
export default transition;
