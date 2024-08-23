import css from "./FilmPage.module.scss";

import FilmInfo from "../../entities/FilmInfo";
import MediaInfo from "@src/entities/MediaInfo";

const FilmPage = () => {
   return (
      <div className={css.wrapper}>
         <MediaInfo />
         <FilmInfo />
      </div>
   );
};

export default FilmPage;
