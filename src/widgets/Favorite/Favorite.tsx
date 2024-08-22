import css from "./Favorite.module.scss";

import { selectFavoriteMovies, useAppSelector } from "@src/app/store";

import FilmsList from "@src/shared/FilmsList";

const Favorite = () => {
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
export default Favorite;
