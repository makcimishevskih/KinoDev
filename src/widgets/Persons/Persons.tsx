// import { useParams } from "react-router-dom";import { useGetMoviePersonsQuery } from "@src/app/store/api/movieApi"; const { filmId } = useParams(); const { data, isLoading, error } = useGetMoviePersonsQuery({ page,filmId: filmId || "",});

import css from "./Persons.module.scss";

import { personsMock } from "@src/app/config/mockActor";
import placeholder from "../../app/assets/placeholder.jpg";
import { usePage } from "@src/hooks/usePage";

import { Link } from "react-router-dom";
import Pagination from "@src/shared/Pagination";

const Persons = () => {
   const { handlePage } = usePage();

   const { docs } = personsMock;

   if (!docs || docs.length === 0) {
      return null;
   }

   return (
      <section className={css.Persons}>
         <div className={css.Person__wrapper}>
            {docs.map((person) => (
               <article
                  key={person.id}
                  className={css.Person}
               >
                  <Link
                     className={css.Person__link}
                     to={`/person/${person.id}`}
                  >
                     <div className={css.Person__poster}>
                        <img
                           className={css.img}
                           src={person.photo || placeholder}
                           alt="Person"
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
               </article>
            ))}
         </div>

         <Pagination
            data={docs}
            pageDisplayed={2}
            handlePage={handlePage}
         />
      </section>
   );
};
export default Persons;
