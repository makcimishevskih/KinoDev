import { Outlet } from "react-router-dom";

import Header from "@src/widgets/Header";
import Footer from "@src/widgets/Footer";

const LayoutPage = () => {
   return (
      <div className="app">
         <Header />
         <div className="container">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default LayoutPage;
