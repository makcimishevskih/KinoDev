import css from "./AppPage.module.scss";

import { mockTenFilms } from "@src/app/config/mockfilms";
import { usePage } from "@src/hooks/usePage";

import { useUpdateSearchParams } from "@src/hooks/useUpdateSearchParams";
import FilmsContentWithPagination from "@src/widgets/FilmsContentWithPagination";
import { useEffect } from "react";
import { changeType } from "@src/app/store/slices/moviesSlice";
import { useAppDispatch } from "@src/app/store";

const AppPage = () => {
   const { page, handlePage } = usePage();
   const { type, order, sortField } = useUpdateSearchParams(page);

   // import { useGetMoviesQuery } from "@src/app/store/api/movieApi"; import Loader from "@src/shared/Loader"; const { data, isLoading, error } = useGetMoviesQuery({ page, type }); if (isLoading) {return <Loader />;}

   // DELETE AFTER USEQUERY
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(changeType("anime"));
   }, []);
   //

   const data = mockTenFilms.docs;

   if (!data || data.length === 0) {
      return null;
   }

   return (
      <section className={css.top250}>
         <h2 className={css.title}>Main films list</h2>
         <FilmsContentWithPagination
            page={page}
            type={type}
            order={order}
            data={data}
            sortField={sortField}
            handlePage={handlePage}
         />
      </section>
   );
};
export default AppPage;
