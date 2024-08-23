import css from "./Top250Page.module.scss";

import { mockTop250 } from "@src/app/config/mockTop250";
import { usePage } from "@src/hooks/usePage";
import { useUpdateSearchParams } from "@src/hooks/useUpdateSearchParams";
import FilmsContentWithPagination from "@src/widgets/FilmsContentWithPagination";

const Top250Page = () => {
   const data = mockTop250;

   const { page, handlePage } = usePage();
   const { type, order, sortField } = useUpdateSearchParams(page);

   // import { useGetTop250Query } from "@src/app/store/api/movieApi"; import Loader from "@src/shared/Loader";
   // const { data, isLoading, error } = useGetTop250Query({ page }); if (isLoading) {return <Loader />;}

   if (!data || data.docs.length === 0) {
      return null;
   }

   return (
      <section className={css.top250}>
         <h2 className={css.title}>Top 250</h2>
         <FilmsContentWithPagination
            data={data.docs}
            type={type}
            order={order}
            sortField={sortField}
            handlePage={handlePage}
            page={page}
         />
      </section>
   );
};
export default Top250Page;
