import { RootState } from "../store";

export const selectType = (state: RootState) => state.movies.type;
export const selectFavoriteMovies = (state: RootState) =>
   state.movies.favoriteFilms;
