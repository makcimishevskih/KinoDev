import css from "./FavoritePage.module.scss";

import { selectFavoriteMovies, useAppSelector } from "@src/app/store";
import FilmsList from "@src/entities/FilmsList";
import NotFound from "@src/shared/ui/NotFound";

const FavoritePage = () => {
   const favoriteFilms = useAppSelector(selectFavoriteMovies);

   return (
      <div className={css.favorite}>
         <h2 className={css.title}>Favorite</h2>

         <div className={css.films}>
            {favoriteFilms.length !== 0 ? (
               <FilmsList films={favoriteFilms} />
            ) : (
               <NotFound>Нет фильмов в избранном</NotFound>
            )}
         </div>
      </div>
   );
};
export default FavoritePage;
