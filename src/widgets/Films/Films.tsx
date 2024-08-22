import css from "./Films.module.scss";

import { movieCategoriesEnT } from "@src/app/config/types";
import { mockTenFilms } from "@src/app/config/mockfilms";
import { handleSorting } from "./config";
import { useAppDispatch, useAppSelector } from "@src/app/store";
import { usePage } from "@src/hooks/usePage";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
   selectOrder,
   selectSortField,
   selectType,
} from "@src/app/store/selectors";

import NotFound from "@src/shared/NotFound";
import Pagination from "@src/shared/Pagination";
import FilmsList from "@src/shared/FilmsList";
import FilterSort from "@src/entities/FilterSort";
import { changeType } from "@src/app/store/slices/moviesSlice";

const Films = () => {
   const { page, handlePage } = usePage();
   const dispatch = useAppDispatch();
   const [_, setSearchParams] = useSearchParams();
   // const [type, setType] = useState<movieCategoriesEnT>("anime");

   const type = useAppSelector(selectType);
   const order = useAppSelector(selectOrder);
   const sortField = useAppSelector(selectSortField);

   useEffect(() => {
      setSearchParams({ type, page: String(page), orderBy: sortField });
   }, [type, page, order]);

   // import { useGetMoviesQuery } from "@src/app/store/api/movieApi"; import Loader from "@src/shared/Loader"; const { data, isLoading, error } = useGetMoviesQuery({ page, type }); if (isLoading) {return <Loader />;}

   const data = mockTenFilms;

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
      <section className={css.main}>
         <div className={css.filterSort}>
            <FilterSort
               type={type}
               order={order}
               changeMovieType={changeMovieType}
            />
         </div>

         {filterFilmsData.length !== 0 ? (
            <>
               <FilmsList films={filterFilmsData} />
               <Pagination
                  data={data.docs}
                  pageDisplayed={3}
                  handlePage={handlePage}
               />
            </>
         ) : (
            <NotFound>Нет фильмов данной категории</NotFound>
         )}
      </section>
   );
};

export default Films;
