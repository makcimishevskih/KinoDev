// import { useGetMoviesQuery } from "@src/app/store/api/movieApi";
// const { data, isLoading, error } = useGetMoviesQuery({ page, type });
import css from "./Films.module.scss";

import { usePage } from "@src/hooks/usePage";
import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { mockTenFilms } from "@src/app/config/mockfilms";
import { movieCategoriesEnT } from "@src/app/config/types";

import NotFound from "@src/shared/NotFound";
import Pagination from "@src/shared/Pagination";
import MoviesTypeList from "./ui/MoviesTypeList";
import FilmsList from "@src/shared/FilmsList";

const Films = () => {
   const [_, setSearchParams] = useSearchParams();
   const { page, handlePage } = usePage();
   const [type, setType] = useState<movieCategoriesEnT>("anime");

   const data = mockTenFilms;

   const changeMovieType = useCallback(
      (type: movieCategoriesEnT) => {
         setType(type);
      },
      [type],
   );

   useEffect(() => {
      setSearchParams({ type, page: String(page) });
   }, [type]);

   if (!data || data.docs.length === 0) {
      return null;
   }

   const filterFilmsData = data.docs
      .filter((el) => el.type === type)
      // delete
      .slice(page === 1 ? 0 : page - 1 * 10, page * 10);

   return (
      <main className={css.main}>
         <MoviesTypeList
            type={type}
            changeMovieType={changeMovieType}
         />

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
      </main>
   );
};

export default Films;
