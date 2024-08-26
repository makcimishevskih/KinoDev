import { Outlet } from "react-router-dom";

import Header from "@src/widgets/Header";
import Footer from "@src/widgets/Footer";

import { InitMotion } from "./lib";
import { useEffect, useState } from "react";

const LayoutPage = () => {
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      const id = setTimeout(() => {
         setIsVisible(false);
      }, 2000);

      return () => clearTimeout(id);
   }, []);

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
