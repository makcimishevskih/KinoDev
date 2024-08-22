import css from "./MediaInfo.module.scss";
import { Link } from "react-router-dom";

import { mockFilmById } from "@src/app/config/mockfilms";

const MediaInfo = () => {
   const data = mockFilmById;
   return (
      <div className={css.media}>
         {/* LINK TO POSTERS */}
         <Link
            to="#"
            className={css.media__link}
         >
            <div className={css.media__imgContainer}>
               <img
                  className={css.media__img}
                  src={data?.poster?.url || ""}
                  alt="film"
               />
            </div>
         </Link>

         {/* VIDEO */}
         {data?.videos?.trailers &&
         data.videos?.trailers[data.videos?.trailers.length - 1].url ? (
            <Link
               to="#"
               className={css.video__link}
            >
               <div className={css.video__container}>
                  <iframe
                     width="222"
                     height="200"
                     src={
                        data.videos?.trailers[data.videos?.trailers.length - 1]
                           .url || ""
                     }
                     frameBorder="0"
                     allowFullScreen
                  ></iframe>
               </div>
               <p className={css.video__caption}>
                  {data.videos?.trailers[data.videos?.trailers.length - 1].name}
               </p>
            </Link>
         ) : null}
      </div>
   );
};

export default MediaInfo;
