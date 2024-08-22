import { useAppSelector } from "@src/app/store";
import {
   selectOrder,
   selectSortField,
   selectType,
} from "@src/app/store/selectors";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useUpdateSearchParams = (page: number) => {
   const { type, order, sortField } = useCustomSelectorForSort();

   const [searchParams, setSearchParams] = useSearchParams();

   const searchParamsObj = Object.fromEntries(searchParams);

   useEffect(() => {
      setSearchParams({ type, page: String(page), order });
   }, [type, page]);

   useEffect(() => {
      if (sortField) {
         setSearchParams({
            ...searchParamsObj,
            sortField: sortField,
         });
      }
   }, [sortField]);

   return { type, order, sortField };
};

const useCustomSelectorForSort = () => {
   const type = useAppSelector(selectType);
   const order = useAppSelector(selectOrder);
   const sortField = useAppSelector(selectSortField);

   return { type, order, sortField };
};

export { useUpdateSearchParams };
