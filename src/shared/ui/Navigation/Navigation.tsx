import css from "./Navigation.module.scss";

import cn from "classnames";
import { navs } from "./config";
import { Link, useLocation } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Navigation = () => {
   const { pathname } = useLocation();
   const { isAuthenticated } = useKindeAuth();

   const cnxActiveLink = (label: string) =>
      cn(css.link, { [css.active]: pathname === label.toLowerCase() });

   const isProtected = (isProt: boolean) => isProt && !isAuthenticated;

   return (
      <nav className={css.navigation}>
         <ul className={css.list}>
            {navs.map((item) =>
               isProtected(item.protected) ? null : (
                  <li
                     className={css.item}
                     key={item.label}
                  >
                     <Link
                        className={cnxActiveLink(item.href)}
                        to={item.href}
                     >
                        {item.label}
                     </Link>
                  </li>
               ),
            )}
         </ul>
      </nav>
   );
};
export default Navigation;
