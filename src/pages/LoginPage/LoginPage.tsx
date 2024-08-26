import css from "./LoginPage.module.scss";

import { useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import Button from "@src/shared/ui/Button";
import Modal from "@src/shared/ui/Modal";

export const Login = () => {
   const navigate = useNavigate();
   const { login, register, isAuthenticated } = useKindeAuth();

   if (isAuthenticated) {
      navigate("/", { replace: true });
   }

   return (
      <div
         className={css.layout}
         key={"login-modal-key"}
      >
         <Modal>
            <div className={css.wrapper}>
               <h2 className={css.title}>Please login or register</h2>
               <div className={css.btns}>
                  <Button
                     onClick={() => register()}
                     color="black"
                     title="Register"
                  />
                  <Button
                     onClick={() => login()}
                     color="black"
                     title="Log In"
                  />
               </div>
            </div>
         </Modal>
      </div>
   );
};

export default Login;
