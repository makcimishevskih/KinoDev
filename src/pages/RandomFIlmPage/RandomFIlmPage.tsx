// import { changeType } from "@src/app/store/slices/moviesSlice";import MoviesTypeList from "../../features/MoviesTypeList";import { movieCategoriesEnT } from "@src/app/config/types";import { useGetRandomQuery } from "@src/app/store/api/movieApi";import Loader from "@src/shared/ui/Loader";
import css from "./RandomFIlmPage.module.scss";

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
         <h2 className={css.title}>Random film</h2>

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
      </section>
   );
};
export default RandomFIlmPage;
