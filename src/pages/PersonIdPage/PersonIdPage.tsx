// import css from "./PersonIdPage.module.scss";
// import { useGetMoviePersonByIdQuery } from "@src/app/store/api/movieApi";
// const { data } = useGetMoviePersonByIdQuery(id || "");

import { PersonById } from "@src/app/config/mockPerson";

import Person from "@src/widgets/Person";

// import { useParams } from "react-router-dom";
const PersonIdPage = () => {
   // const { id } = useParams();

   const data = PersonById;

   return <Person data={data} />;
};
export default PersonIdPage;
