import css from "./Button.module.scss";

import cn from "classnames";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   variant?: "user" | "pagination" | "default" | "close";
   img?: string;
   imgAlt?: string;
   imgWidth?: number;
   imgHeight?: number;
   color?: "black" | "white";
   imgClassName?: string;
};

const variants = {
   user: css.button_user,
   pagination: css.button_pagination,
   default: css.button_default,
   close: css.button_close,
};
const buttonColors = {
   black: css.button_black,
   white: css.button_white,
};

const Button = ({
   title,
   onClick,
   color = "white",
   variant = "default",
   className,
   img,
   imgAlt,
   imgWidth,
   imgHeight,
   imgClassName,
   children,
   ...buttonProps
}: ButtonProps) => {
   const cnBtn = cn(
      css.button,
      variants[variant],
      buttonColors[color],
      className,
   );

   return (
      <button
         onClick={onClick}
         className={cnBtn}
         {...buttonProps}
         style={imgWidth ? { width: imgWidth, height: imgHeight } : {}}
      >
         {img ? (
            <img
               width={30}
               height={30}
               className={cn(css.img, imgClassName)}
               src={img}
               alt={imgAlt}
            />
         ) : null}
         {children ? children : title}
      </button>
   );
};

export default Button;
