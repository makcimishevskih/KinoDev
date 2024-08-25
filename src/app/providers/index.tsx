import router from "./router";

import store from "../store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { AnimatePresence } from "framer-motion";

const Providers = () => {
   return (
      <KindeProvider
         clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
         domain={import.meta.env.VITE_KINDE_DOMAIN}
         logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URL}
         redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URL}
      >
         <AnimatePresence
            mode="wait"
            // initial={false}
         >
            <Provider store={store}>
               <RouterProvider router={router} />
            </Provider>
         </AnimatePresence>
      </KindeProvider>
   );
};

export default Providers;
