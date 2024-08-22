import { useNavigate } from "react-router-dom";

const useNavigateTo = () => {
   const navigate = useNavigate();

   const handleLoginNavigate = () => {
      navigate("/login");
   };

   return { handleLoginNavigate };
};
export default useNavigateTo;
