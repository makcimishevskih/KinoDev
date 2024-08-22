import css from "./MainFilmInfo.module.scss";

import cn from "classnames";
import { mockFilmById } from "@src/app/config/mockfilms";

import Rating from "../Rating";
import ActorsInfo from "./ui/PersonsInfo";

import DetailedInfo from "./ui/DetailedInfo";
import SequelsPrequels from "./ui/SequelsPrequels";

const MainFilmInfo = () => {
   const film = mockFilmById;

   return (
      <div className={css.mainInfo}>
         {/* 1 MAIN INFO */}
         <div className={css.columnWrapper}>
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
            <Rating film={film} />
         </div>
         {/* 2 MAIN RATING */}
         <div className={cn(css.columnWrapper, "mt-12")}>
            <div className={css.detailsInfo__wrapper}>
               <DetailedInfo data={film} />
            </div>
            <div className={css.actorsInfo__wrapper}>
               <ActorsInfo />
               {/* <Awards /> */}
            </div>
         </div>
         {/* 3 MAIN SEQUELS REMAKES PREQUELS*/}
         {film.sequelsAndPrequels && (
            <div className={cn(css.sequelsPrequels)}>
               <SequelsPrequels sequelsPrequels={film.sequelsAndPrequels} />
            </div>
         )}
      </div>
   );
};

export default MainFilmInfo;
