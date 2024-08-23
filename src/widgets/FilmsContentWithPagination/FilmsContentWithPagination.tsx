import css from "./FilmsContentWithPagination.module.scss";

import FilmT, {
   movieCategoriesEnT,
   OrderT,
   SortFieldT,
} from "@src/app/config/types";
import { handleSorting } from "./config";
import { useAppDispatch } from "@src/app/store";
import { changeType } from "@src/app/store/slices/moviesSlice";

import Pagination from "@src/shared/Pagination";
import NotFound from "@src/shared/NotFound";
import FilterSort from "@src/entities/FilterSort";
import FilmsList from "@src/entities/FilmsList";

const FilmsContentWithPagination = ({
   data,
   type,
   order,
   sortField,
   page,
   handlePage,
}: {
   data: FilmT[];
   type: movieCategoriesEnT;
   order: OrderT;
   sortField: SortFieldT;
   page: number;
   handlePage: (num: number) => void;
}) => {
   const dispatch = useAppDispatch();

   if (!data || data.length === 0) {
      return null;
   }

   const changeMovieType = (type: movieCategoriesEnT) => {
      dispatch(changeType(type));
   };

   const filterFilmsData = [...data]
      .sort((a, b): any => handleSorting(a, b, order, sortField))
      .filter((el) => el.type === type)
      // DELETE AFTER UNCOMMENT USEQUERY
      .slice(page === 1 ? 0 : page - 1 * 10, page * 10);

   return (
      <>
         <div className={css.filterSort}>
            <FilterSort
               type={type}
               order={order}
               changeMovieType={changeMovieType}
            />
         </div>

         <div className={css.content}>
            {filterFilmsData.length !== 0 ? (
               <>
                  <FilmsList films={data} />
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
