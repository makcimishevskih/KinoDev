import cn from "classnames";
import { ProfessionT } from "@src/app/config/types";
import { mockFilmById } from "@src/app/config/mockfilms";

import { Link } from "react-router-dom";
import NotFound from "@src/shared/ui/NotFound";

interface ProfessionsListProps {
   profession?: ProfessionT | null;
   isClamp?: boolean;
   className?: string;
   separator?: string;
   classNameClamp?: "line-clamp" | "line-clamp-2";
}

const ProfessionsList = ({
   profession,
   separator,
   className,
   isClamp = false,
}: ProfessionsListProps) => {
   const persons = mockFilmById.persons || [];

   if (persons.length === 0) {
      return <NotFound>Персонал не найден</NotFound>;
   }

   const filteredPersons = profession
      ? persons.filter((person) => person.profession === profession)
      : persons;

   const cnxWrapper = cn(className, {
      "line-clamp-2": isClamp,
   });

   return (
      <div className={cnxWrapper}>
         {filteredPersons.map((person, i) => (
            <Link
               key={person.id}
               to={`/person/${person.id}`}
            >
               {person.name}
               {separator && i !== filteredPersons?.length - 1 && (
                  <span>{separator}</span>
               )}
            </Link>
         ))}
      </div>
   );
};

export default ProfessionsList;
