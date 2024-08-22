import css from "./Rating.module.scss";
import classNames from "classnames";
import FilmT from "@src/app/config/types";

interface RatingProps {
   film: FilmT;
   isList?: boolean;
}

const Rating = ({ film, isList = false }: RatingProps) => {
   const rating =
      (film?.rating && (film?.rating.kp || film?.rating.imdb))?.toFixed(1) ||
      "Недостаточно оценок";

   const cnxRating = classNames(
      css.rate,
      rating !== "0.0"
         ? {
              [css.gold]: +rating > 8,
              [css.green]: +rating > 6.9 && +rating < 8,
              [css.gray]: +rating > 4.9 && +rating < 7,
              [css.red]: +rating < 5,
           }
         : "",
   );

   return (
      <div className={css.rating}>
         {rating !== "0.0" ? (
            <div className={cnxRating}>
               <span>{rating}</span>
               {film.top250 && !isList && (
                  <div className={css.rating__top250}>
                     <span>Топ 250</span>
                     <span>{film.top250} место</span>
                  </div>
               )}
            </div>
         ) : (
            <div className={classNames(css.gray, css.noRating)}>
               Мало оценок
            </div>
         )}

         <div className={css.votes}>
            <span>{film.votes.kp} оценок</span>
         </div>
         {!isList && (
            <div className={css.criticsRate}>
               <span>{film.rating?.filmCritics} оценка критиков</span>
            </div>
         )}
      </div>
   );
};

export default Rating;
