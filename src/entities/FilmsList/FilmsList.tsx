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
         {films.map((film) => (
            <motion.li
               key={film.id}
               initial={{ x: "150%", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.15,
               }}
            >
               <Film
                  film={film}
                  hasInFilmsList={
                     !!favoriteFilms.find((fav) => fav.id === film.id)
                  }
               />
            </motion.li>
         ))}
      </ul>
   );
};
export default FilmsList;
