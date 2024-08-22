import css from "./iconComponent.module.scss";

import cn from "classnames";
import { icons, IconValuesT } from "./icons";

interface IconsI {
   width?: number;
   height?: number;
   name: IconValuesT;
   color?: string;
   className?: string;
}

const IconComponent = ({
   name,
   width = 24,
   height = 24,
   className,
}: IconsI) => {
   return (
      <div
         className={cn(css.icon, className ? className : "")}
         style={{ width, height }}
      >
         {icons[name]}
      </div>
   );
};

export default IconComponent;
