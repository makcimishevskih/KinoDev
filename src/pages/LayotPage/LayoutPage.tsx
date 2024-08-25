import { Outlet } from "react-router-dom";

import Header from "@src/widgets/Header";
import Footer from "@src/widgets/Footer";

import { InitMotion } from "./lib";

const LayoutPage = () => {
   return (
      <div className="app">
         <Header />
         <InitMotion />
         <div className="container">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default LayoutPage;
