import css from "./Navigation.module.scss";
import { navs } from "./config";

import cn from "classnames";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Link, useLocation } from "react-router-dom";

import Button from "../Button";

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
                  <Link
                     to={item.href}
                     key={item.label}
                     className={css.item}
                  >
                     <Button className={cnxActiveLink(item.href)}>
                        {item.label}
                     </Button>
                  </Link>
               ),
            )}
         </ul>
      </nav>
   );
};
export default Navigation;
