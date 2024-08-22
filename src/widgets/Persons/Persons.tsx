// import { useParams } from "react-router-dom";
// import { useGetMovieActorsQuery } from "@src/app/store/api/movieApi";
// const { filmId } = useParams();
// const { data, isLoading, error } = useGetMovieActorsQuery({
//    page,
//    filmId: filmId || "",
// });
// const docs = data && data.docs;

import css from "./Persons.module.scss";

import { actorsMock } from "@src/app/config/mockActor";
import placeholder from "../../app/assets/placeholder.jpg";
import { usePage } from "@src/hooks/usePage";

import { Link } from "react-router-dom";
import Pagination from "@src/shared/Pagination";

const Persons = () => {
   const { handlePage } = usePage();

   const { docs } = actorsMock;

   if (!docs || docs.length === 0) {
      return null;
   }

   return (
      <div className={css.actors}>
         <div className={css.actor__wrapper}>
            {docs.map((person) => (
               <div
                  key={person.id}
                  className={css.actor}
               >
                  <Link
                     className={css.actor__link}
                     to={`/person/${person.id}`}
                  >
                     <div className={css.actor__poster}>
                        <img
                           className={css.img}
                           src={person.photo || placeholder}
                           alt="actor"
                        />
                     </div>

                     <div className={css.wrapper}>
                        <div className={css.title}>
                           <span>{person.name}</span>
                        </div>
                        <div className={css.subtitle}>
                           <span>{person.enName}</span>
                        </div>
                        <div className={css.additionalInfo}>
                           <span>Возраст: {person.age}</span>
                           <span>Пол: {person.sex}</span>
                        </div>
                     </div>
                  </Link>
               </div>
            ))}
         </div>

         <Pagination
            data={docs}
            pageDisplayed={2}
            handlePage={handlePage}
         />
      </div>
   );
};
export default Persons;
