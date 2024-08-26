import css from "./AppPage.module.scss";

import { useEffect, useState } from "react";
// import { usePage } from "@src/shared/hooks/usePage";
import { mockTenFilms } from "@src/app/config/mockfilms";

import { useUpdateSearchParams } from "@src/shared/hooks/useUpdateSearchParams";
import FilmsContentWithPagination from "@src/widgets/FilmsContentWithPagination";
import { changeType } from "@src/app/store/slices/moviesSlice";
import { useAppDispatch } from "@src/app/store";

const AppPage = () => {
   // const { page, handlePage } = usePage();
   const [page, setPage] = useState(1);

   const handlePage = (page: number) => {
      setPage(page);
   };

   console.log(Number.isNaN == isNaN);

   const params = useUpdateSearchParams(page);

   // import { useGetMoviesQuery } from "@src/app/store/api/movieApi"; import Loader from "@src/shared/ui/Loader"; const { data, isLoading, error } = useGetMoviesQuery({ page, type }); if (isLoading) {return <Loader />;}

   // DELETE AFTER USEQUERY
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(changeType("anime"));
   }, [dispatch]);
   //

   const data = mockTenFilms.docs;

   if (!data || data.length === 0) {
      return null;
   }

   return (
      <>
         <section className={css.main}>
            <h1
               className={css.title}
               key={"main-title-key"}
            >
               Main films
            </h1>
            <FilmsContentWithPagination
               page={page}
               data={data}
               handlePage={handlePage}
               {...params}
            />
         </section>
      </>
   );
};

export default AppPage;
