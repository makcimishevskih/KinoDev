import { useCallback, useState } from "react";

const usePage = (): { page: number; handlePage: (page: number) => void } => {
   const [page, setPage] = useState(1);

   const handlePage = useCallback(
      (page: number) => {
         setPage(page);
      },
      [page],
   );

   return { page, handlePage };
};

export { usePage };
