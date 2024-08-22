import css from "./Card.module.scss";

import classNames from "classnames";
import { MoviesT } from "@src/app/config/types";
import placeholder from "../../../../../../../../app/assets/placeholder.jpg";

interface CardI {
   movie: MoviesT;
}

const Card = ({ movie: { poster, rating, type, year, name } }: CardI) => {
   return (
      <div className={css.card}>
         <div className={css.img__wrapper}>
            <img
               className={css.img}
               src={poster && (poster.url || poster.previewUrl || placeholder)}
               alt="logo"
            />
            <div className={css.rating}>
               <span className={css.rating__value}>
                  {typeof rating !== "number"
                     ? rating?.imdb || rating?.kp || "0.0"
                     : rating}
               </span>
            </div>
         </div>

         <h3 className={classNames(css.title, "line-clamp-2")}>{name}</h3>
         <div className={css.data}>
            <span className={css.data__year}>{year},</span>
            <span className={css.data__genre}>{type}</span>
         </div>
      </div>
   );
};
export default Card;
