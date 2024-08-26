import { InitMotion } from "./lib";
import useVisibilityleByTimer from "@src/shared/hooks/useVisibilityleByTimer";

import { Outlet } from "react-router-dom";

import Header from "@src/widgets/Header";
import Footer from "@src/widgets/Footer";

const LayoutPage = () => {
   const { isVisible } = useVisibilityleByTimer(1800);

   return (
      <div className="app">
         <Header />
         {isVisible && <InitMotion />}
         <div className="container">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default LayoutPage;
