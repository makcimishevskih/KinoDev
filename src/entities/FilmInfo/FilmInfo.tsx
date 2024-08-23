import css from "./FilmInfo.module.scss";

import cn from "classnames";
import { mockFilmById } from "@src/app/config/mockfilms";

import Rating from "../Rating";
import PersonsInfo from "./ui/PersonsInfo";

import DetailedInfo from "./ui/DetailedInfo";
import SequelsPrequels from "./ui/SequelsPrequels";
import MainInfo from "./ui/MainInfo";

const FilmInfo = () => {
   const film = mockFilmById;

   return (
      <div className={css.mainInfo}>
         {/* 1 MAIN INFO */}
         <div className={css.wrapper}>
            <MainInfo film={film} />
            <Rating film={film} />
         </div>
         {/* 2 MAIN RATING */}
         <div className={cn(css.wrapper, "mt-12")}>
            <div className={css.detailsInfo__wrapper}>
               <DetailedInfo data={film} />
            </div>
            <div className={css.personsInfo__wrapper}>
               <PersonsInfo />
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

export default FilmInfo;
