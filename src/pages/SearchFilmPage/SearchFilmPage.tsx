// import { useGetSearchQuery } from "@src/app/store/api/movieApi";
// import { useParams } from "react-router-dom";
// const { query } = useParams();
// const { data } = useGetSearchQuery({ page, query });

import css from "./SearchFilmPage.module.scss";

// import { useCallback, useState } from "react";
import { mockQueryFilms } from "@src/app/config/mockfilms";
import { usePage } from "@src/hooks/usePage";

import Pagination from "@src/shared/Pagination";
import NotFound from "@src/shared/NotFound";
import FilmsList from "@src/shared/FilmsList";

const SearchFilmPage = () => {
   const { page, handlePage } = usePage();

   const data = mockQueryFilms;

   if (data && data.docs.length === 0) {
      return null;
   }

   const filterFilmsData = data.docs.slice(
      page === 1 ? 0 : page - 1 * 10,
      page * 10,
   );

   return (
      <div className={css.search}>
         <h2 className={css.title}>Searched results:</h2>
         {filterFilmsData.length !== 0 ? (
            <div className={css.wrapper}>
               <FilmsList films={filterFilmsData} />
               <Pagination
                  data={data.docs}
                  pageDisplayed={3}
                  handlePage={handlePage}
               />
               ;
            </div>
         ) : (
            <NotFound>Нет фильмов данной категории</NotFound>
         )}
      </div>
   );
};

export default SearchFilmPage;
