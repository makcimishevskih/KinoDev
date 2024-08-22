import css from "./FilterSort.module.scss";

import { movieCategoriesEnT, OrderT } from "@src/app/config/types";

import Sort from "@src/features/Sort";
import MoviesTypeList from "@src/features/MoviesTypeList";

interface FilterSortProps {
   order: OrderT;
   type: movieCategoriesEnT;
   changeMovieType: (type: movieCategoriesEnT) => void;
}

const FilterSort = ({ order, type, changeMovieType }: FilterSortProps) => {
   return (
      <div className={css.filterSort}>
         <MoviesTypeList
            type={type}
            changeMovieType={changeMovieType}
         />
         <Sort order={order} />
      </div>
   );
};
export default FilterSort;
