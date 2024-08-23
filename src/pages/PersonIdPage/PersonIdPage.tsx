// import css from "./PersonIdPage.module.scss";
// import { useGetMoviePersonByIdQuery } from "@src/app/store/api/movieApi";
// const { data } = useGetMoviePersonByIdQuery(id || "");

import { mockPersonById } from "@src/app/config/mockActor";
import Person from "@src/widgets/Person";

// import { useParams } from "react-router-dom";
const PersonIdPage = () => {
   // const { id } = useParams();

   const data = mockPersonById;

   return <Person data={data} />;
};
export default PersonIdPage;
