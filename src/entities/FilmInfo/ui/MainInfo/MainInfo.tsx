import css from "./MainInfo.module.scss";

import FilmT from "@src/app/config/types";

interface MainFilmInfoProps {
   film: FilmT;
}

const MainFilmInfo = ({ film }: MainFilmInfoProps) => {
   return (
      <div className={css.info}>
         <h1 className={css.title}>
            <span>{film.name}</span>
            <span>
               {film.isSeries &&
               film?.releaseYears &&
               film?.releaseYears?.length > 0 &&
               film?.releaseYears[0]?.start &&
               film?.releaseYears[0]?.end
                  ? `сериал (${film?.releaseYears}-${film?.releaseYears[0].end})`
                  : `(${film.year})`}
            </span>
         </h1>
         <h2 className={css.subtitle}>
            <span>{film.alternativeName}</span>
            <span>{film.ageRating ? `${film.ageRating}+` : null}</span>
         </h2>

         {film.shortDescription && (
            <p className={css.text}>{film.shortDescription}</p>
         )}

         {film.seasonsInfo && film.seasonsInfo?.length > 0 && (
            <>
               <span>{film.seasonsInfo[0].episodesCount}</span>
               <span>{film.seasonsInfo[0].number}</span>
            </>
         )}
      </div>
   );
};
export default MainFilmInfo;
