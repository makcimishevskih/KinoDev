import css from "./LoginBtn.module.scss";
import placeholder from "../../app/assets/placeholder.jpg";

import { useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import Button from "@src/shared/Button";

const LoginBtn = () => {
   const navigate = useNavigate();
   const { isAuthenticated, user, logout } = useKindeAuth();

   return (
      <div className={css.login}>
         {isAuthenticated && (
            <>
               <Button
                  variant="user"
                  img={user?.picture || placeholder}
                  imgAlt="avatar"
                  onClick={() => navigate("/user")}
                  imgWidth={40}
                  imgHeight={40}
               />
               <Button
                  title="Logout"
                  onClick={logout}
               />
            </>
         )}

         {!isAuthenticated && (
            <>
               <Button
                  title="To Login"
                  onClick={() => navigate("/login")}
               />
            </>
         )}
      </div>
   );
};

export default LoginBtn;
