import css from "./Search.module.scss";

import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Input from "@src/shared/Input";

const Search = () => {
   const ref = useRef<HTMLInputElement | null>(null);
   const navigate = useNavigate();

   const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (ref.current) {
         navigate(`/search/${ref.current.value}`);
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
