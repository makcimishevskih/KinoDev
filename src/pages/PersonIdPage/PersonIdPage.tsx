// import css from "./ActorIdPage.module.scss";
// import { useGetMovieActorByIdQuery } from "@src/app/store/api/movieApi";
// const { data } = useGetMovieActorByIdQuery(id || "");

import { actorById } from "@src/app/config/mockActor";

import Actor from "@src/widgets/Person";

// import { useParams } from "react-router-dom";
const PersonIdPage = () => {
   // const { id } = useParams();

   const data = actorById;

   return <Actor data={data} />;
};
export default PersonIdPage;
