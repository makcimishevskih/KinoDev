import css from "./UserPage.module.scss";

import { Navigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import placeholder from "../../app/assets/placeholder.jpg";

import Loader from "@src/shared/Loader";
import Button from "@src/shared/Button";

const UserPage = () => {
   const { isAuthenticated, isLoading, user, logout } = useKindeAuth();

   if (!isAuthenticated && !isLoading) {
      return (
         <Navigate
            to="/"
            replace
         />
      );
   }

   if (isLoading) {
      return <Loader />;
   }

   return (
      <div className={css.user}>
         <div className={css.img__wrapper}>
            <img
               className={css.img}
               src={user?.picture || placeholder}
               alt="avatar"
            />
         </div>
         <div className={css.user__info}>
            <h2 className={css.title}>
               <span>{user?.given_name}</span>
               <span> {user?.family_name}</span>
            </h2>
            <p className={css.email}>{user && user?.email}</p>
            <div className={css.btns}>
               <Button
                  title="Logout"
                  color="black"
                  onClick={logout}
               />
            </div>
         </div>
      </div>
   );
};

export default UserPage;
