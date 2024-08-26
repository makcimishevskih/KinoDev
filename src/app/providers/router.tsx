import paths from "./config";

import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Loader from "@src/shared/ui/Loader";
import AppPage from "@src/pages/AppPage";
import ErrorPage from "@src/pages/ErrorPage";
import LayoutPage from "@src/pages/LayotPage";
import FavoritePage from "@src/pages/FavoritePage";

import {
   FilmPage,
   UserPage,
   LoginPage,
   Top250Page,
   PersonIdPage,
   SearchFilmPage,
   RandomFIlmPage,
   PersonsListPage,
} from "./lazyRoutes";

const router = createBrowserRouter([
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
]);

export default router;
