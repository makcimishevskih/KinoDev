import css from "./DetailContainer.module.scss";

import cn from "classnames";
import { capitalize } from "@src/utils/helpers";
import { PersonsT, ProfessionT } from "@src/app/config/types";

import ProfessionsList from "../ProfessionsList";

interface DetailContainerProps {
   title: string;
   profession?: ProfessionT;
   isList?: boolean;
   persons?: PersonsT[];
   children?: React.ReactNode | string;
   className?: string;
   isClamp?: boolean;
   classNameTitle?: string;
}

const DetailContainer = ({
   children,
   title,
   profession,
   className,
   isList = false,
   isClamp = false,
   classNameTitle = "",
}: DetailContainerProps) => {
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

export default DetailContainer;
