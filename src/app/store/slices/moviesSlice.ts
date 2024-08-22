import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FilmT, { movieCategoriesEnT } from "@src/app/config/types";

export interface StateI {
   type: movieCategoriesEnT;
   favoriteFilms: FilmT[];
}

const initialState: StateI = {
   type: "movie",
   favoriteFilms: [],
} as StateI;
1;

export const moviesSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {
      changeType: (state, { payload }: PayloadAction<movieCategoriesEnT>) => {
         state.type = payload;
      },
      addFilmToFavorite: (state, { payload }: PayloadAction<FilmT>) => {
         const hasFilm = state.favoriteFilms.find(
            (film) => film.id === payload.id,
         );

         if (hasFilm) return;
         state.favoriteFilms.push(payload);
      },
      removeFilmFromFavorite: (
         state,
         { payload }: PayloadAction<number | undefined>,
      ) => {
         if (!payload) return;

         state.favoriteFilms = state.favoriteFilms.filter(
            (film) => film.id !== payload,
         );
      },
   },
});

export const { changeType, addFilmToFavorite, removeFilmFromFavorite } =
   moviesSlice.actions;
export default moviesSlice.reducer;
