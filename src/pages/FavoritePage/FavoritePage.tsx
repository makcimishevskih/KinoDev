import Favorite from "@src/widgets/Favorite";
import css from "./FavoritePage.module.scss";

const FavoritePage = () => {
   return (
      <div className={css.favorite}>
         <Favorite />
      </div>
   );
};
export default FavoritePage;
