import FilmT, { OrderT, SortFieldT } from "@src/app/config/types";
import { sortFilmsByOrder } from "@src/shared/lib/helpers";

export const handleSorting = (
   filmA: FilmT,
   filmB: FilmT,
   order: OrderT,
   sortField: SortFieldT,
) => {
   const [f1, f2] = sortFilmsByOrder<FilmT>(filmA, filmB, order);

   switch (sortField) {
      case "rating":
         if (f1[sortField].kp || f2[sortField].kp) {
            return compare(f1[sortField].kp, f2[sortField].kp);
         } else if (f1[sortField].imdb || f2[sortField].imdb) {
            return compare(f1[sortField].imdb, f2[sortField].imdb);
         }

         return 0;
      case "name":
         return compare(f1[sortField], f2[sortField]);
      default:
         return 0;
   }
};

const compare = (
   a: string | number | undefined | null,
   b: string | number | undefined | null,
) => {
   return String(a || 0).localeCompare(String(b || 0));
};
