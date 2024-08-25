import css from "./FilterSort.module.scss";
import { PropsWithChildren } from "react";

const FilterSort = ({ children }: PropsWithChildren) => {
   return <div className={css.filterSort}>{children}</div>;
};
export default FilterSort;
