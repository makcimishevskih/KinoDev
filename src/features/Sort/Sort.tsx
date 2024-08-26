import css from "./Sort.module.scss";
import arrow from "@src/app/assets/arrowUp.svg";

import cn from "classnames";
import { useAppDispatch } from "@src/app/store";
import { OrderT, SortFieldT } from "@src/app/config/types";
import { changeOrder, changSortField } from "@src/app/store/slices/moviesSlice";
import { sortTypes } from "./config";

interface SortProps {
   order: OrderT;
}

const Sort = ({ order }: SortProps) => {
   const arrowCnx = cn(css.arrow, css[order]);
   const dispatch = useAppDispatch();

   const handleSortFieldDispatch = (sortField: SortFieldT) => {
      dispatch(changSortField(sortField));
      dispatch(changeOrder());
   };

   return (
      <div className={css.sort}>
         <ul className={css.list}>
            {sortTypes.map(({ label, sortable }) => (
               <li
                  className={css.item}
                  key={label}
                  onClick={() =>
                     sortable ? handleSortFieldDispatch(label) : undefined
                  }
               >
                  <h4 className={css.title}>{label}</h4>
                  {sortable ? (
                     <img
                        className={arrowCnx}
                        src={arrow}
                        alt={`${order} arrow`}
                     />
                  ) : null}
               </li>
            ))}
         </ul>
      </div>
   );
};
export default Sort;
