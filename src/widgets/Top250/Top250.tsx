import css from "./Top250.module.scss";
import { usePage } from "@src/hooks/usePage";

import { mockTop250 } from "@src/app/config/mockTop250";
import FilmsList from "@src/shared/FilmsList";
import Pagination from "@src/shared/Pagination";

const Top250 = () => {
   const data = mockTop250;

   if (!data) {
      return null;
   }

   const { handlePage } = usePage();

   return (
      <div className={css.top250}>
         <h2 className={css.title}>Top 250</h2>

         <FilmsList films={data.docs} />
         <Pagination
            data={data.docs}
            handlePage={handlePage}
         />
      </div>
   );
};
export default Top250;
