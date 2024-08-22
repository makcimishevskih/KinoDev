import css from "./PersonsInfo.module.scss";

import classNames from "classnames";
import { professions } from "./config";
import { capitalize } from "@src/utils/helpers";
import { ProfessionT } from "@src/app/config/types";
import { mockFilmById } from "@src/app/config/mockfilms";

import { Link, useParams } from "react-router-dom";
import NotFound from "@src/shared/NotFound";

const PersonsInfo = () => {
   const { persons } = mockFilmById;

   const { id } = useParams();

   if (!persons || persons?.length === 0) {
      return <NotFound>Нет данных</NotFound>;
   }

   const filteredPersons = (profession: ProfessionT) =>
      persons.length > 10
         ? persons.filter((person) => person.profession === profession)
         : persons;

   const filteredPersonsLen = (profession: ProfessionT) =>
      persons.filter((person) => person.profession === profession).length;

   return (
      <div className={css.actors}>
         {professions.map((profession) => (
            <div
               key={profession}
               className={classNames(css.wrapper)}
            >
               <h3 className={css.title}>{capitalize(profession)}:</h3>

               {filteredPersons(profession)
                  .slice(0, 10)
                  .map((person) => (
                     <Link
                        key={person.id}
                        to={`/person/${person.id}`}
                        className={css.link}
                     >
                        {person.name}
                     </Link>
                  ))}

               <Link
                  className={css.more}
                  to={`/persons/${id}`}
                  // to={`/persons/${profession.slice(0, profession.length - 1)}`}
               >
                  Ещё {filteredPersonsLen(profession)}
               </Link>
            </div>
         ))}
      </div>
   );
};

export default PersonsInfo;
