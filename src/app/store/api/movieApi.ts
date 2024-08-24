import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { personsMockI } from "@src/app/config/mockActor";
import FilmT, {
   PersonsT,
   MockFilmsT,
   movieCategoriesEnT,
} from "@src/app/config/types";

const BASE_MOVIES_URL = "https://api.kinopoisk.dev/v1.4";

const KEY: string = import.meta.env.VITE_KINO_DEV_SECRET_KEY;

// const getRandomMovieCategory = () => {
//    const movieCategories = ["movie","cartoon","tv-serias","anime","animated-series",]; return movieCategories[Math.floor(Math.random() * movieCategories.length)]};
//  url: `/movie?page=${page}&limit=10&type=${getRandomMovieCategory()}`

const movieApi = createApi({
   reducerPath: "movieApi",
   baseQuery: fetchBaseQuery({
      baseUrl: BASE_MOVIES_URL,
      prepareHeaders: (headers) => {
         headers.set("Content-Type", "application/json; charset=utf-8");
         headers.set("X-API-KEY", KEY);
         return headers;
      },
   }),
   endpoints: (builder) => ({
      getMovies: builder.query<
         MockFilmsT,
         { page: number; type: movieCategoriesEnT }
      >({
         query: ({ page = 1, type = "anime" }) => ({
            url: `/movie?page=${page}&limit=10&type=${type}`,
         }),
      }),
      getMovieById: builder.query<FilmT, string>({
         query(id) {
            return {
               url: `/movie/${id}`,
            };
         },
      }),
      getSearch: builder.query<MockFilmsT, { page?: number; query?: string }>({
         query({ page = 1, query = "" }) {
            return {
               url: `/movie/search?page=${page}&limit=10&query=${query}`,
            };
         },
      }),
      getMoviePersonById: builder.query<PersonsT, string>({
         query(id) {
            return {
               url: `/person/${id}`,
            };
         },
      }),
      getMoviePersons: builder.query<
         personsMockI,
         { page: number; filmId: string }
      >({
         query({ page = 1, filmId = "" }) {
            return {
               // url: `/person?page=${page}&limit=10&profession.value=${profession}&movies.id=${filmId}`,
               url: `/person?page=${page}&limit=10&movies.id=${filmId}`,
            };
         },
      }),
      getRandom: builder.query<FilmT, undefined>({
         query() {
            return {
               // url: `/movie/random?type=${type}`,
               url: "/movie/random",
            };
         },
      }),
      getTop250: builder.query<FilmT[], { page: number }>({
         query({ page = 1 }) {
            return {
               url: `/movie?page=${page}&limit=10&lists=top250`,
            };
         },
      }),
   }),
});

export const {
   useGetSearchQuery,
   useGetMoviesQuery,
   useGetMoviePersonsQuery,
   useGetMovieByIdQuery,
   useGetMoviePersonByIdQuery,
   useGetRandomQuery,
   useLazyGetRandomQuery,
   useGetTop250Query,
} = movieApi;

export default movieApi;
