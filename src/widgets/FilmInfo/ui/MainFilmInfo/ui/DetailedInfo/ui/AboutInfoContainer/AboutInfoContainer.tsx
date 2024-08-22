import css from "./AboutInfoContainer.module.scss";

import cn from "classnames";
import { capitalize } from "@src/utils/helpers";
import { ActorsT, ProfessionT } from "@src/app/config/types";

import ProfessionsList from "../ProfessionsList";

interface AboutInfoContainerI {
   title: string;
   profession?: ProfessionT;
   isList?: boolean;
   persons?: ActorsT[];
   children?: React.ReactNode | string;
   className?: string;
   isClamp?: boolean;
   classNameTitle?: string;
}

const AboutInfoContainer = ({
   children,
   title,
   profession,
   className,
   isList = false,
   isClamp = false,
   classNameTitle = "",
}: AboutInfoContainerI) => {
   const cnxFlex = cn(css.value_flex, className ?? className);
   const cnx = cn(css.value, className ?? className);

   const render = () =>
      !isList ? (
         <div className={cnxFlex}>{children}</div>
      ) : (
         <ProfessionsList
            profession={profession ? profession : null}
            separator={", "}
            isClamp={isClamp}
            className={cnx}
         />
      );

   return (
      <div className={cn(css.wrapper)}>
         <h3 className={cn(!classNameTitle ? css.subtitle : classNameTitle)}>
            {capitalize(title)}
         </h3>
         {render()}
      </div>
   );
};

export default AboutInfoContainer;
