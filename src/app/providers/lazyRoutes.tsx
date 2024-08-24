import { lazy } from "react";

const FilmPage = lazy(() => import("@src/pages/FilmPage"));
const UserPage = lazy(() => import("@src/pages/UserPage"));
const LoginPage = lazy(() => import("@src/pages/LoginPage"));
const Top250Page = lazy(() => import("@src/pages/Top250Page"));
const PersonIdPage = lazy(() => import("@src/pages/PersonIdPage"));
const RandomFIlmPage = lazy(() => import("@src/pages/RandomFIlmPage"));
const SearchFilmPage = lazy(() => import("@src/pages/SearchFilmPage"));
const PersonsListPage = lazy(() => import("@src/pages/PersonsListPage"));

export {
   FilmPage,
   UserPage,
   LoginPage,
   Top250Page,
   PersonIdPage,
   SearchFilmPage,
   RandomFIlmPage,
   PersonsListPage,
};
