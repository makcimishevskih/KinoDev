import User from "@src/widgets/User";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Navigate } from "react-router-dom";

const UserPage = () => {
   const { isAuthenticated, isLoading, error } = useKindeAuth();

   if (!isAuthenticated && !isLoading && !error) {
      return (
         <Navigate
            to="/"
            replace
         />
      );
   }

   return <User />;
};
export default UserPage;
