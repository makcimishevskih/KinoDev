import css from "./FavoritePage.module.scss";

import { selectFavoriteMovies, useAppSelector } from "@src/app/store";
import FilmsList from "@src/entities/FilmsList";

const FavoritePage = () => {
   const favoriteFilms = useAppSelector(selectFavoriteMovies);

   return (
      <div className={css.favorite}>
         <h2 className={css.title}>Favorite</h2>

         <div className={css.films}>
            <FilmsList films={favoriteFilms} />
         </div>
      </div>
   );
};
export default FavoritePage;
