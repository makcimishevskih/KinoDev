import css from "./FilmsContentWithPagination.module.scss";

import FilmT, {
   movieCategoriesEnT,
   OrderT,
   SortFieldT,
} from "@src/app/config/types";
import { handleSorting } from "./config";
import { useAppDispatch } from "@src/app/store";
import { changeType } from "@src/app/store/slices/moviesSlice";

import Pagination from "@src/shared/ui/Pagination";
import NotFound from "@src/shared/ui/NotFound";
import FilterSort from "@src/entities/FilterSort";
import FilmsList from "@src/entities/FilmsList";
import MoviesTypeList from "@src/features/MoviesTypeList";
import Sort from "@src/features/Sort";

const FilmsContentWithPagination = ({
   data,
   type,
   order,
   sortField,
   page,
   handlePage,
}: {
   data: FilmT[];
   page: number;
   order: OrderT;
   sortField: SortFieldT;
   type: movieCategoriesEnT;
   handlePage: (num: number) => void;
}) => {
   const dispatch = useAppDispatch();

   const changeMovieType = (type: movieCategoriesEnT) => {
      dispatch(changeType(type));
   };

   const filterFilmsData = [...data]
      .sort((a, b) => handleSorting(a, b, order, sortField))
      .filter((el) => el.type === type)
      // DELETE AFTER UNCOMMENT USEQUERY
      .slice(page === 1 ? 0 : page - 1 * 10, page * 10);

   return (
      <>
         <div className={css.filterSort}>
            <FilterSort>
               <MoviesTypeList
                  type={type}
                  changeMovieType={changeMovieType}
               />
               <Sort order={order} />
            </FilterSort>
         </div>

         <div className={css.content}>
            {filterFilmsData.length !== 0 ? (
               <>
                  <FilmsList films={filterFilmsData} />
                  <Pagination
                     data={data}
                     handlePage={handlePage}
                  />
               </>
            ) : (
               <NotFound>Фильмы данной категории не найдены</NotFound>
            )}
         </div>
      </>
   );
};

export default FilmsContentWithPagination;
