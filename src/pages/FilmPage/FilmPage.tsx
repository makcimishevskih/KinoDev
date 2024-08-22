import css from "./FilmInfo.module.scss";

import MainFilmInfo from "./ui/MainFilmInfo";
import MediaInfo from "./ui/MediaInfo";

const FilmPage = () => {
   return (
      <div className={css.wrapper}>
         <MediaInfo />
         <MainFilmInfo />
      </div>
   );
};

export default FilmPage;
