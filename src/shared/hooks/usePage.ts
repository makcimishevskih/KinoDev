import { useState } from "react";

const usePage = (): { page: number; handlePage: (page: number) => void } => {
   const [page, setPage] = useState(1);

   const handlePage = (page: number) => {
      setPage(page);
   };

   return { page, handlePage };
};

export { usePage };
