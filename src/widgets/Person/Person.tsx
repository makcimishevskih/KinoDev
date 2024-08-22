import css from "./Person.module.scss";

import { ActorsT } from "@src/app/config/types";
import { capitalize, formatDate, getActorYears } from "@src/utils/helpers";

import AboutInfoContainer from "../FilmInfo/ui/MainFilmInfo/ui/DetailedInfo/ui/AboutInfoContainer";
import { Link } from "react-router-dom";

interface PersonsProps {
   data: ActorsT;
}

const Person = ({ data }: PersonsProps) => {
   const { day, month, year } = formatDate(data.birthday || "");
   const actorYears = getActorYears(year);

   const movies =
      data.movies && data.movies.length > 10
         ? data.movies.slice(0, 10)
         : data.movies;

   const formatGrowth =
      String(data.growth).slice(0, 1) +
      "." +
      String(data.growth).slice(1) +
      " м";

   const renderData = [
      {
         title: "Рост",
         value: formatGrowth,
      },
      {
         title: "Дата рождения",
         value: (
            <ul style={{ display: "flex", gap: 20 }}>
               <li>
                  {day} {month}, {year}
               </li>
               <li style={{ listStyle: "initial" }}>{actorYears} лет(года)</li>
               <span></span>
            </ul>
         ),
      },
      {
         title: "Место рождения",
         value: (
            <ul
               className="line-clamp-2"
               style={{ display: "flex", gap: 8 }}
            >
               {data.birthPlace &&
                  data.birthPlace.map((place, i) => (
                     <li key={place.value}>
                        {place.value}
                        {data.birthPlace && i === data.birthPlace?.length - 1
                           ? ""
                           : ","}
                     </li>
                  ))}
            </ul>
         ),
      },
      {
         title: "Всего фильмов",
         value: (data.movies && data?.movies.length) || 0,
      },
   ];

   return (
      <div className={css.actor}>
         <div className={css.media}>
            {/* LINK TO POSTERS */}
            <div className={css.media__link}>
               <div className={css.media__imgContainer}>
                  <img
                     className={css.media__img}
                     src={data.photo || ""}
                     alt="film"
                  />
               </div>
            </div>
         </div>

         <div className={css.info}>
            <h1 className={css.title}>{data.name}</h1>
            <h2 className={css.subtitle}>{data.enName}</h2>
            <div className={css.wrapper}>
               <div className={css.details}>
                  <h2 className={css.subtitle}>О персоне</h2>
                  {renderData.map(({ title, value }) => (
                     <AboutInfoContainer
                        key={title}
                        title={title}
                     >
                        {value}
                     </AboutInfoContainer>
                  ))}
               </div>

               <div className={css.film}>
                  <h3 className={css.title}>{capitalize("фильмы" || "")}:</h3>

                  <ul className={css.list}>
                     {movies &&
                        movies.map(({ id, name }) => (
                           <Link
                              key={id}
                              to={`/film/${id}`}
                              className={css.link}
                           >
                              {name}
                           </Link>
                        ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Person;
