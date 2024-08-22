import css from "./FilmsList.module.scss";
import FilmT from "@src/app/config/types";

import Film from "../Film";
import { selectFavoriteMovies, useAppSelector } from "@src/app/store";

interface FilmsListProps {
   films: FilmT[];
}

const FilmsList = ({ films }: FilmsListProps) => {
   const favoriteFilms = useAppSelector(selectFavoriteMovies);

   return (
      <div className={css.films}>
         {films.map((film) => (
            <Film
               key={film.id}
               film={film}
               hasInFilmsList={
                  !!favoriteFilms.find((fav) => fav.id === film.id)
               }
            />
         ))}
      </div>
   );
};
export default FilmsList;
