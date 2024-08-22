import css from "./Header.module.scss";

import { icons } from "@src/shared/icons/icons";

import { Link } from "react-router-dom";
import Search from "@src/features/Search";
import LoginBtn from "@src/features/LoginBtn";
import Navigation from "@src/shared/Navigation";

const Header = () => {
   return (
      <div className={css.header}>
         <Link to="/">
            <div className={css.logo}>
               <h1>КП</h1>
               <svg
                  width="180"
                  height="80"
                  viewBox="0 0 722 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  {icons && icons?.kpBgBlack}
               </svg>
            </div>
         </Link>
         <Navigation />

         <Search />

         <LoginBtn />

         {/* <div className={css.favorite}>
            <ul className={css.list}>
               <li className={css.item}>first</li>
            </ul>
         </div> */}
      </div>
   );
};

export default Header;
