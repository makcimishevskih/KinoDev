import css from "./Top250Page.module.scss";

import { usePage } from "@src/hooks/usePage";
import { useUpdateSearchParams } from "@src/hooks/useUpdateSearchParams";
import { useAppDispatch } from "@src/app/store";
import { mockTop250 } from "@src/app/config/mockTop250";
import { handleSorting } from "@src/widgets/Films/config";
import { movieCategoriesEnT } from "@src/app/config/types";
import { changeType } from "@src/app/store/slices/moviesSlice";

import FilmsList from "@src/shared/FilmsList";
import Pagination from "@src/shared/Pagination";
import NotFound from "@src/shared/NotFound";
import FilterSort from "@src/entities/FilterSort";

const Top250Page = () => {
   const data = mockTop250;

   const dispatch = useAppDispatch();
   const { page, handlePage } = usePage();
   const { type, order, sortField } = useUpdateSearchParams(page);

   // import { useGetMoviesQuery } from "@src/app/store/api/movieApi"; import Loader from "@src/shared/Loader"; const { data, isLoading, error } = useGetMoviesQuery({ page, type }); if (isLoading) {return <Loader />;}

   if (!data || data.docs.length === 0) {
      return null;
   }

   const changeMovieType = (type: movieCategoriesEnT) => {
      dispatch(changeType(type));
   };

   const filterFilmsData = [...data.docs]
      .sort((a, b): any => handleSorting(a, b, order, sortField))
      .filter((el) => el.type === type)
      // DELETE AFTER UNCOMMENT USEQUERY
      .slice(page === 1 ? 0 : page - 1 * 10, page * 10);

   return (
      <section className={css.top250}>
         <h2 className={css.title}>Top 250</h2>

         <div className={css.filterSort}>
            <FilterSort
               type={type}
               order={order}
               changeMovieType={changeMovieType}
            />
         </div>

         <div className={css.content}>
            {filterFilmsData.length !== 0 ? (
               <FilmsList films={filterFilmsData} />
            ) : (
               <NotFound>Фильмы данной категории не найдены</NotFound>
            )}
            <Pagination
               data={data.docs}
               handlePage={handlePage}
            />
         </div>
      </section>
   );
};

export default Top250Page;
