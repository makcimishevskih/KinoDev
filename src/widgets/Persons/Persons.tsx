// import { useParams } from "react-router-dom";import { useGetMoviepersonsQuery } from "@src/app/store/api/movieApi"; const { filmId } = useParams(); const { data, isLoading, error } = useGetMoviepersonsQuery({ page,filmId: filmId || "",});

import css from "./Persons.module.scss";

import { usePage } from "@src/shared/hooks/usePage";
import { personsMock } from "@src/app/config/mockActor";
import placeholder from "../../app/assets/placeholder.jpg";

import { Link } from "react-router-dom";
import Pagination from "@src/shared/ui/Pagination";

const Persons = () => {
   const { handlePage } = usePage();

   const { docs } = personsMock;

   if (!docs || docs.length === 0) {
      return null;
   }

   return (
      <section className={css.persons}>
         <div className={css.person__wrapper}>
            {docs.map((person) => (
               <article
                  key={person.id}
                  className={css.person}
               >
                  <Link
                     className={css.person__link}
                     to={`/person/${person.id}`}
                  >
                     <div className={css.person__poster}>
                        <img
                           className={css.img}
                           src={person.photo || placeholder}
                           alt="person"
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
