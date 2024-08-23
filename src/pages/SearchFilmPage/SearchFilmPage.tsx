// import { useGetSearchQuery } from "@src/app/store/api/movieApi";
// import { useParams } from "react-router-dom";

import css from "./SearchFilmPage.module.scss";

import { usePage } from "@src/hooks/usePage";
import { mockQueryFilms } from "@src/app/config/mockfilms";
import { useUpdateSearchParams } from "@src/hooks/useUpdateSearchParams";

import NotFound from "@src/shared/NotFound";
import Pagination from "@src/shared/Pagination";
import FilmsList from "@src/entities/FilmsList";

const SearchFilmPage = () => {
   const { page, handlePage } = usePage();
   // const { query } = useParams();
   useUpdateSearchParams(page);
   // const { data: { docs } } = useGetSearchQuery({ page, query });

   const data = mockQueryFilms.docs;

   if (data && data.length === 0) {
      return null;
   }

   // DELETE AFTER USEQUERYHOOK
   const filterFilmsData = data.slice(
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
                  data={data}
                  handlePage={handlePage}
                  pageDisplayed={3}
               />
            </div>
         ) : (
            <NotFound>Фильмы данной категории не найдены</NotFound>
         )}
      </div>
   );
};

export default SearchFilmPage;
