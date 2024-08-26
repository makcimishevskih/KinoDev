// import { changeType } from "@src/app/store/slices/moviesSlice";import MoviesTypeList from "@src/features/MoviesTypeList";import { movieCategoriesEnT } from "@src/app/config/types";import { useGetRandomQuery } from "@src/app/store/api/movieApi";import Loader from "@src/shared/ui/Loader";
import css from "./RandomFIlmPage.module.scss";

import { motion } from "framer-motion";
import { mockRandomFilm } from "@src/app/config/mockRandom";
import {
   selectFavoriteMovies,
   // selectType,useAppDispatch,
   useAppSelector,
} from "@src/app/store";

import Film from "@src/entities/Film";
import Button from "@src/shared/ui/Button";

const RandomFIlmPage = () => {
   const films = useAppSelector(selectFavoriteMovies);

   const film = mockRandomFilm;

   // const dispatch = useAppDispatch();const { data: film, isLoading, refetch } = useGetRandomQuery(type);
   // const type = useAppSelector(selectType);if (!film) {return null;}if (isLoading) {return <Loader />;}const handleChangeType = (type: movieCategoriesEnT) => {dispatch(changeType(type));refetch();};

   return (
      <section className={css.random}>
         <h1
            key={"random-title-key"}
            className={css.title}
         >
            Random film
         </h1>

         <motion.div
            key={`motion-article-random-film`}
            initial={{ y: "150%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
               delay: 0.4,
               type: "spring",
               duration: 1,
            }}
            className={css.film__wrapper}
         >
            <Film
               film={film}
               hasInFilmsList={!!films.find((fav) => fav.id === film.id)}
            />

            <div className={css.btns}>
               <Button
                  color="black"
                  // onClick={() => refetch()}
               >
                  Change film
               </Button>
            </div>
         </motion.div>
      </section>
   );
};
export default RandomFIlmPage;
