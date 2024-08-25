import bg from "../../app/assets/logo-kp/black_background/kinopoisk-logo-colored-on-blackbackground-rus.png";

import { motion } from "framer-motion";

export const transition = (Comp: any) => {
   // const variant: {
   //    x: [100, 0, 0, 100];
   //    transition: {
   //       times: [0, 0.4, 0.6, 1];
   //    };
   // };

   return () => (
      <>
         <Comp />
         <motion.div
            content=""
            className="main_animation"
            initial={{
               clipPath: `circle(${2000 * 2 + 200}px at 40px 40px)`,
            }}
            animate={{ clipPath: "circle(0px at 40px 40px)" }}
            transition={{
               ease: "easeInOut",
               delay: 0.8,
               // delay: 3,
            }}
            exit={{
               clipPath: `circle(${2000 * 2 + 200}px at 40px 40px)`,
               opacity: 0,
            }}
         >
            <motion.div
               className="main_animation_div"
               initial={
                  {
                     //    scale: 20,
                     //    opacity: 0,
                     // x: "50%",
                     // y: "50%",
                     // translateX: "-50%",
                     // translateY: "-50%",
                  }
               }
               animate={
                  {
                     // scale: [10, 1],
                     // x: ["50%", "50%", "50%", "50%", "-100vw"],
                     // y: ["50%", "50%", "50%", "50%", "-60vh"],
                     // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                     // scale: [20, 1],
                     // opacity: [1],
                     // x: ["50%", "-100vw"],
                     // y: ["50%", "-60vh"],
                  }
               }
               // exit={{
               //    x: "-100vw",
               //    y: "-60vh",
               // }}
               transition={{
                  delay: 1.5,
               }}
            >
               <img
                  src={bg}
                  alt="kp-logo"
               />
            </motion.div>
         </motion.div>
      </>
   );
};
export default transition;
