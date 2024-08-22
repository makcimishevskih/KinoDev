import css from "./Footer.module.scss";

import { Link } from "react-router-dom";
import { footerLinks } from "./config";

const Footer = () => {
   return (
      <div className={css.footer}>
         <div className={css.footer__links}>
            {footerLinks.map((link) => (
               <Link
                  to={link.link}
                  key={link.label}
                  className={css.footer__link}
               >
                  {link.label}
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Footer;
