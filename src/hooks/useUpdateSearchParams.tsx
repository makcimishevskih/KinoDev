import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useUpdateSearchParams = (paramsArr: any[], dependenciesArr: any[]) => {
   const [searchParams, setSearchParams] = useSearchParams();

   useEffect(() => {
      setSearchParams(...paramsArr);
   }, [dependenciesArr]);

   return [searchParams, setSearchParams];
};

export { useUpdateSearchParams };
