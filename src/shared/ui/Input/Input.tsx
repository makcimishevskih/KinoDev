import css from "./Input.module.scss";

import { forwardRef } from "react";
import { IconValuesT } from "../icons/icons";

import IconComponent from "../icons/IconComponent";

interface InputI {
   width?: number;
   height?: number;
   iconName?: IconValuesT;
}

const Input = forwardRef<HTMLInputElement, InputI>(
   ({ iconName, height, width }, ref) => {
      return (
         <label
            htmlFor={"input"}
            className={css.wrapper}
         >
            {iconName && (
               <IconComponent
                  name={iconName}
                  width={width}
                  height={height}
                  className={css.icon__search}
               />
            )}
            <input
               id={"input"}
               ref={ref}
               type="text"
               className={css.input}
            />
         </label>
      );
   },
);

export default Input;
