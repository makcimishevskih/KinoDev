// import {useGetRandomQuery,    useLazyGetRandomQuery,} from "@src/app/store/api/movieApi";
// const { data, isLoading, error, refetch } = useGetRandomQuery(state.type);
import css from "./Random.module.scss";

import { mockRandomFilm } from "@src/app/config/mockRandom";
import { changeType } from "@src/app/store/slices/moviesSlice";
import { movieCategoriesEnT } from "@src/app/config/types";
import {
   selectFavoriteMovies,
   selectType,
   useAppDispatch,
   useAppSelector,
} from "@src/app/store";

import Film from "@src/shared/Film";
import MoviesTypeList from "../Films/ui/MoviesTypeList";

const Random = () => {
   const type = useAppSelector(selectType);
   const films = useAppSelector(selectFavoriteMovies);

   console.log(JSON.stringify(films));
   const dispatch = useAppDispatch();

   const film = mockRandomFilm;

   if (!film) {
      return null;
   }

   const handleChangeType = (type: movieCategoriesEnT) => {
      dispatch(changeType(type));
      // refetch();
   };

   return (
      <div className={css.random}>
         <h2 className={css.title}>Random film</h2>
         <MoviesTypeList
            type={type}
            changeMovieType={handleChangeType}
         />

         <Film
            film={film}
            hasInFilmsList={!!films.find((fav) => fav.id === film.id)}
         />
      </div>
   );
};
export default Random;
