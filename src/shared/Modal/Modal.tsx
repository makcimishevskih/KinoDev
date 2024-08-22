import css from "./Modal.module.scss";

import { Navigate, useNavigate } from "react-router-dom";
import Button from "../Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import React from "react";

interface ModalProps {
   children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
   const navigate = useNavigate();
   const { isAuthenticated } = useKindeAuth();

   if (isAuthenticated) {
      return (
         <Navigate
            to="/"
            replace
         />
      );
   }

   return (
      <div className={css.layout}>
         <div className={css.modal}>
            {children}
            <Button
               variant="close"
               className={css.close}
               onClick={() => navigate(-1)}
            />
         </div>
      </div>
   );
};

export default Modal;
