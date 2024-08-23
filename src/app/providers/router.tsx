import paths from "./config";

import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "@src/shared/ui/Loader";
import AppPage from "@src/pages/AppPage";
import ErrorPage from "@src/pages/ErrorPage";
import LayoutPage from "@src/pages/LayotPage";
import FavoritePage from "@src/pages/FavoritePage";

const FilmPage = lazy(() => import("@src/pages/FilmPage"));
const UserPage = lazy(() => import("@src/pages/UserPage"));
const LoginPage = lazy(() => import("@src/pages/LoginPage"));
const Top250Page = lazy(() => import("@src/pages/Top250Page"));
const PersonIdPage = lazy(() => import("@src/pages/PersonIdPage"));
const RandomFIlmPage = lazy(() => import("@src/pages/RandomFIlmPage"));
const SearchFilmPage = lazy(() => import("@src/pages/SearchFilmPage"));
const PersonsListPage = lazy(() => import("@src/pages/PersonsListPage"));

const router = createBrowserRouter(
   [
      {
         path: paths.HOME,
         element: <LayoutPage />,
         errorElement: <ErrorPage />,
         children: [
            {
               path: paths.HOME,
               element: <AppPage />,
               errorElement: <ErrorPage />,
            },
            {
               path: paths.LOGIN,
               element: (
                  <Suspense fallback={<Loader />}>
                     <LoginPage />
                  </Suspense>
               ),
               errorElement: <ErrorPage />,
            },
            {
               path: paths.USER,
               element: (
                  <Suspense fallback={<Loader />}>
                     <UserPage />
                  </Suspense>
               ),
               errorElement: <ErrorPage />,
            },
            {
               path: paths.FAVORITE,
               element: (
                  <Suspense fallback={<Loader />}>
                     <FavoritePage />
                  </Suspense>
               ),
               errorElement: <ErrorPage />,
            },
            {
               path: paths.FILM_BY_ID,
               element: (
                  <Suspense fallback={<Loader />}>
                     <FilmPage />
                  </Suspense>
               ),
               errorElement: <ErrorPage />,
            },
            {
               path: paths.SEARCH_BY_QUERY,
               element: (
                  <Suspense fallback={<Loader />}>
                     <SearchFilmPage />
                  </Suspense>
               ),
               errorElement: <ErrorPage />,
            },
            {
               path: paths.PERSONS_BY_FILM_ID,
               element: (
                  <Suspense fallback={<Loader />}>
                     <PersonsListPage />
                  </Suspense>
               ),
               errorElement: <ErrorPage />,
            },
            {
               path: paths.PERSON_BY_ID,
               element: (
                  <Suspense fallback={<Loader />}>
                     <PersonIdPage />
                  </Suspense>
               ),
               errorElement: <ErrorPage />,
            },
            {
               path: paths.TOP250,
               element: (
                  <Suspense fallback={<Loader />}>
                     <Top250Page />
                  </Suspense>
               ),
               errorElement: <ErrorPage />,
            },
            {
               path: paths.RANDOM,
               element: (
                  <Suspense fallback={<Loader />}>
                     <RandomFIlmPage />
                  </Suspense>
               ),
               errorElement: <ErrorPage />,
            },
         ],
      },
   ],
   // { basename: import.meta.env.BASE_URL },
);

export default router;
