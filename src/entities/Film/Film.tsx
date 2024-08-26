import css from "./Film.module.scss";

import placeholder from "@src/app/assets/placeholder.jpg";
import FilmT from "@src/app/config/types";
import heartFill from "@src/app/assets/heart-fill.svg";
import heartEmpty from "@src/app/assets/heart-empty.svg";

import { useCallback } from "react";
import { useAppDispatch } from "@src/app/store";
import { changeFilmFavoriteStatus } from "@src/app/store/slices/moviesSlice";

import Rating from "../Rating";
import { Link } from "react-router-dom";
import Button from "@src/shared/ui/Button";
import NotFound from "@src/shared/ui/NotFound";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface FilmProps {
   film: FilmT;
   hasInFilmsList?: boolean;
}

const Film = ({ hasInFilmsList, film }: FilmProps) => {
   const {
      id,
      name,
      year,
      type,
      poster,
      countries,
      releaseYears,
      alternativeName,
   } = film;

   const dispatch = useAppDispatch();

   const handleClick = useCallback(
      (film: FilmT) => {
         dispatch(changeFilmFavoriteStatus(film));
      },
      [dispatch],
   );

   if (!film) {
      return <NotFound>Фильм не найден</NotFound>;
   }

   const hasPoster = (poster && poster?.previewUrl) || poster?.url;

   const hasReleaseDates = !!(
      releaseYears &&
      releaseYears[0] &&
      releaseYears[0].start &&
      releaseYears[0].end &&
      releaseYears[0].start &&
      releaseYears[0].end
   );

   return (
      <div className={css.film}>
         <Link
            className={css.film__link}
            to={`/film/${id}`}
         >
            <LazyLoadImage
               effect="blur"
               width={150}
               height={225}
               style={{
                  objectFit: hasPoster ? "cover" : "fill",
               }}
               alt="poster"
               placeholderSrc={poster?.previewUrl || placeholder}
               src={hasPoster || placeholder}
               className={css.poster}
               visibleByDefault={!!hasPoster}
            />
         </Link>

         <div className={css.wrapper}>
            <Link
               to={`/film/${id}`}
               className={css.info}
            >
               <div className={css.title}>
                  <span>{name}</span>
               </div>
               <div className={css.subtitle}>
                  <span>{alternativeName},</span>
                  {hasReleaseDates ? (
                     <span>
                        {releaseYears[0].start}-{releaseYears[0].end}
                     </span>
                  ) : (
                     <span>{year}</span>
                  )}
               </div>

               <div className={css.additionalInfo}>
                  <span>
                     {countries && countries[0].name} {type}
                  </span>
               </div>
            </Link>

            <div className={css.user}>
               <Rating
                  isList={true}
                  film={film}
               />
               <div className={css.user__btns}>
                  <Button
                     className={css.like}
                     variant="user"
                     color="black"
                     onClick={() => handleClick(film)}
                     imgAlt={hasInFilmsList ? "like" : "unlike"}
                     img={hasInFilmsList ? heartFill : heartEmpty}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Film;
