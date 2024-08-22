import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FilmT, {
   SortFieldT,
   OrderT,
   movieCategoriesEnT,
} from "@src/app/config/types";

export interface StateI {
   order: OrderT;
   sortField: SortFieldT;
   favoriteFilms: FilmT[];
   type: movieCategoriesEnT;
}

const initialState: StateI = {
   type: "movie",
   favoriteFilms: [],
   order: "asc",
   sortField: "",
} as StateI;
1;

export const moviesSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {
      changeType: (state, { payload }: PayloadAction<movieCategoriesEnT>) => {
         state.type = payload;
      },
      changeOrder: (state) => {
         state.order = state.order === "asc" ? "desc" : "asc";
      },
      changSortField: (state, { payload }: PayloadAction<SortFieldT>) => {
         state.sortField = payload;
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

export const {
   changeType,
   addFilmToFavorite,
   removeFilmFromFavorite,
   changeOrder,
   changSortField,
} = moviesSlice.actions;
export default moviesSlice.reducer;
