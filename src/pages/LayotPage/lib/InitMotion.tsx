import css from "./InitMotion.module.scss";

import { motion } from "framer-motion";
import logo from "@src/app/assets/logo-kp/black_background/kinopoisk-logo-colored-on-blackbackground-rus.png";
import classNames from "classnames";

const InitMotion = () => {
   return (
      <motion.div
         key={"motion-main-initial"}
         viewport={{ once: true }}
         whileInView={{ opacity: 1 }}
         className={classNames(css.main_animation, css.vh100)}
         initial={{
            clipPath: `circle(${2000 * 2 + 200}px at 40px 40px)`,
         }}
         animate={{ clipPath: "circle(0 at 40px 40px)" }}
         transition={{
            ease: "easeInOut",
            delay: 0.4,
            duration: 1.2,
         }}
         exit={{
            clipPath: `circle(${2000 * 2 + 200}px at 40px 40px)`,
            opacity: 0,
         }}
      >
         <div className={css.img_container}>
            <img
               width="100%"
               height="100%"
               src={logo}
               alt="kp-logo"
            />
         </div>
      </motion.div>
   );
};
export default InitMotion;
