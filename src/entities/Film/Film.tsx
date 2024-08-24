import css from "./Film.module.scss";

import FilmT from "@src/app/config/types";
import placeholder from "../../app/assets/placeholder.jpg";
import heartFill from "../../app/assets/heart-fill.svg";
import heartEmpty from "../../app/assets/heart-empty.svg";

import { useCallback } from "react";
import { useAppDispatch } from "@src/app/store";
import { changeFilmFavoriteStatus } from "@src/app/store/slices/moviesSlice";

import NotFound from "../../shared/ui/NotFound";
import { Link } from "react-router-dom";
import Button from "../../shared/ui/Button";
import Rating from "../Rating";

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

   const hasPoster = poster && (poster?.url || poster?.previewUrl);

   const hasReleaseDates =
      releaseYears &&
      releaseYears[0] &&
      releaseYears[0].start &&
      releaseYears[0].end &&
      releaseYears[0].start &&
      releaseYears[0].end;

   return (
      <article className={css.film__wrapper}>
         <div className={css.film}>
            <Link
               className={css.film__link}
               to={`/film/${id}`}
            >
               <img
                  style={{
                     objectFit: hasPoster ? "cover" : "fill",
                  }}
                  className={css.poster}
                  src={hasPoster || placeholder}
                  alt="url"
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
      </article>
   );
};

export default Film;
