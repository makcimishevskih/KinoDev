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
   type: "anime",
   order: "asc",
   sortField: "",
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
      changeOrder: (state) => {
         state.order = state.order === "asc" ? "desc" : "asc";
      },
      changSortField: (state, { payload }: PayloadAction<SortFieldT>) => {
         state.sortField = payload;
      },
      changeFilmFavoriteStatus: (state, { payload }: PayloadAction<FilmT>) => {
         if (!payload) return;

         const hasFilm = state.favoriteFilms.find(
            (film) => film.id === payload.id,
         );

         if (hasFilm) {
            state.favoriteFilms = state.favoriteFilms.filter(
               (film) => film.id !== payload.id,
            );
            return;
         }

         state.favoriteFilms.push(payload);
      },
   },
});

export const {
   changeType,
   changeOrder,
   changSortField,
   // addFilmToFavorite,
   // removeFilmFromFavorite,
   changeFilmFavoriteStatus,
} = moviesSlice.actions;
export default moviesSlice.reducer;
