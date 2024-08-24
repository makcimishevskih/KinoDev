import css from "./Search.module.scss";

import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { xssValidation } from "@src/shared/lib/helpers";

import Input from "@src/shared/ui/Input";

const Search = () => {
   const navigate = useNavigate();
   const ref = useRef<HTMLInputElement | null>(null);

   const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const value = xssValidation(ref.current?.value || "");

      if (value && ref.current?.value) {
         navigate(`/search/${value}`);
         ref.current.value = "";
      }
   };
   return (
      <form
         className={css.search}
         onSubmit={handleSearchSubmit}
      >
         <Input
            ref={ref}
            iconName="search"
            width={24}
            height={24}
         />
      </form>
   );
};

export default Search;
