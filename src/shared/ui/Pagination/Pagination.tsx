import css from "./Pagination.module.scss";

import ReactPaginate from "react-paginate";

interface PaginationProps<T> {
   data: T[];
   pageDisplayed?: number;
   handlePage: (selected: number) => void;
}

import "swiper/css";
import Button from "../Button";

const Pagination = <T,>({
   data,
   pageDisplayed = 3,
   handlePage,
}: PaginationProps<T>) => {
   if (!data || data.length < 1) {
      return null;
   }

   return (
      <ReactPaginate
         activeLinkClassName={css.active}
         containerClassName={css.pagination}
         pageClassName={css.pagination__item}
         pageLinkClassName={css.pagination__link}
         pageRangeDisplayed={pageDisplayed}
         onPageChange={(event) => handlePage(event.selected + 1)}
         pageCount={(data && data.length) || 1}
         breakLabel="..."
         previousLabel={
            <Button
               variant="pagination"
               imgAlt={"prev button"}
               className={css.button_prev}
            />
         }
         nextLabel={
            <Button
               variant="pagination"
               imgAlt={"next button"}
               className={css.button_next}
            />
         }
      />
   );
};

export default Pagination;
