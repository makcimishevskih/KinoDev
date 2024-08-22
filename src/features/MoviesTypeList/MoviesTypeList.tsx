import css from "./MoviesTypeList.module.scss";

import cn from "classnames";
import { movieCategoriesEnT } from "@src/app/config/types";
import { movieCategories } from "./config";

interface MoviesTypeListProps {
   type: movieCategoriesEnT;
   changeMovieType: (type: movieCategoriesEnT) => void;
}

const MoviesTypeList = ({ type, changeMovieType }: MoviesTypeListProps) => {
   const itemCnx = (category: movieCategoriesEnT) =>
      cn(css.movieCategories__item, category === type ? css.active : "");

   return (
      <ul className={css.movieCategories__list}>
         {movieCategories.map((category) => (
            <li
               key={category}
               onClick={() => changeMovieType(category)}
               className={itemCnx(category)}
            >
               {category}
            </li>
         ))}
      </ul>
   );
};
export default MoviesTypeList;
