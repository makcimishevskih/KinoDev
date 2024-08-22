import css from "./FilmInfo.module.scss";

import MediaInfo from "./ui/MediaInfo";
import MainFilmInfo from "./ui/MainFilmInfo";

const FilmInfo = () => {
   return (
      <div className={css.wrapper}>
         <MediaInfo />
         <MainFilmInfo />
      </div>
   );
};

export default FilmInfo;
