import css from "./Top250Page.module.scss";

import { mockTop250 } from "@src/app/config/mockTop250";
import { usePage } from "@src/shared/hooks/usePage";
import { useUpdateSearchParams } from "@src/shared/hooks/useUpdateSearchParams";
import FilmsContentWithPagination from "@src/widgets/FilmsContentWithPagination";
import { useEffect } from "react";
import { useAppDispatch } from "@src/app/store";
import { changeType } from "@src/app/store/slices/moviesSlice";

//
import { transition } from "@src/shared/animation/transition";
//
const Top250Page = () => {
   const data = mockTop250.docs;

   const { page, handlePage } = usePage();
   const params = useUpdateSearchParams(page);

   // import { useGetTop250Query } from "@src/app/store/api/movieApi"; import Loader from "@src/shared/ui/Loader";
   // const { data, isLoading, error } = useGetTop250Query({ page }); if (isLoading) {return <Loader />;}

   // DELETE AFTER USEQUERY
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(changeType("movie"));
   }, [dispatch]);
   //

   if (!data || data.length === 0) {
      return null;
   }

   return (
      <section className={css.top250}>
         <h2 className={css.title}>Top 250</h2>
         <FilmsContentWithPagination
            data={data}
            page={page}
            handlePage={handlePage}
            {...params}
         />
      </section>
   );
};

export default Top250Page;
// export default transition(Top250Page);
