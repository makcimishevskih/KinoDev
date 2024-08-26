import css from "./FilmsList.module.scss";
import FilmT from "@src/app/config/types";

import Film from "../Film";
import { selectFavoriteMovies, useAppSelector } from "@src/app/store";
import { motion } from "framer-motion";

interface FilmsListProps {
   films: FilmT[];
}

const FilmsList = ({ films }: FilmsListProps) => {
   const favoriteFilms = useAppSelector(selectFavoriteMovies);

   return (
      <ul className={css.films}>
         {films.map((film, i) => (
            <motion.li
               key={`motion-film-list-${film.id}`}
               initial={{ y: "150%", opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 0, opacity: 1 }}
               transition={{
                  ease: "easeInOut",
                  delay: i * 0.4,
               }}
            >
               <Film
                  film={film}
                  hasInFilmsList={favoriteFilms.some(
                     (fav) => fav.id === film.id,
                  )}
               />
            </motion.li>
         ))}
      </ul>
   );
};
export default FilmsList;
