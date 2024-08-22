import { RootState } from "../store";

export const selectType = (state: RootState) => state.movies.type;
export const selectOrder = (state: RootState) => state.movies.order;
export const selectSortField = (state: RootState) => state.movies.sortField;
export const selectFavoriteMovies = (state: RootState) =>
   state.movies.favoriteFilms;
