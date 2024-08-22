import css from "./DetailedInfo.module.scss";

import cn from "classnames";
import { formatBudgetToUSD, formatShort } from "@src/utils/helpers";
import FilmT from "@src/app/config/types";
import { professions } from "./config";

import NotFound from "@src/shared/NotFound";
import AboutInfoContainer from "./ui/AboutInfoContainer/AboutInfoContainer";

interface DetailedInfoProps {
   data: FilmT;
   className?: string;
}

const DetailedInfo = ({ data, className }: DetailedInfoProps) => {
   const values = {
      budget: formatBudgetToUSD(data.budget?.value) || (
         <NotFound>Нет данных</NotFound>
      ),
      feesUSA: formatBudgetToUSD(data?.fees?.usa.value) || (
         <NotFound>Нет данных</NotFound>
      ),
      feesWorld: formatBudgetToUSD(data?.fees?.world.value) || (
         <NotFound>Нет данных</NotFound>
      ),
      sumFees: (data?.fees?.world &&
         data?.fees?.usa &&
         data.fees?.world?.value &&
         data.fees?.usa?.value &&
         formatBudgetToUSD(
            data.fees?.world?.value + data.fees?.usa?.value,
         )) || <NotFound>Нет данных</NotFound>,
   };

   const renderDataBefore = [
      { title: "Год производства", value: data.year },
      { title: "Страна", value: data.countries[0].name },
      {
         title: "Жанр",
         value: data.genres.map((genre, i) => (
            <div
               key={genre.name}
               className={cn(css.about__value, "line-clamp-2")}
            >
               <span>{genre.name}</span>
               {data.genres && i !== data.genres?.length - 1 ? ", " : ""}
            </div>
         )),
      },
      { title: "Слоган", value: data.slogan ? data.slogan : "-" },
   ];

   const renderDataAfter = [
      { title: "Бюджет", value: values.budget },
      { title: "Сборы в США", value: values.feesUSA },
      {
         title: "Сборы в мире",
         value: `+ ${values.feesWorld} = ${values.sumFees}`,
      },
      {
         title: "Зрители",
         value:
            data.audience &&
            data.audience?.map((el, i) => (
               <div
                  key={el.count}
                  className={cn(css.about__value, "line-clamp-2")}
               >
                  <span>{el.country}</span>
                  <span>{formatShort(el.count)}</span>
                  {data.audience && i !== data.audience?.length - 1 ? ", " : ""}
               </div>
            )),
      },
      {
         title: "Возраст",
         value: `${data.ageRating}+`,
         className: css.ageBox,
      },
      {
         title: "Рейтинг MPAA",
         value: `${data.ratingMpaa?.toUpperCase()}+`,
         className: css.ageBox,
      },
      {
         title: "Время",
         value:
            data.movieLength &&
            `${Math.floor(data.movieLength / 60)} ч ${data.movieLength % 60} мин`,
      },
   ];

   return (
      <div className={cn(css.about, className ?? "")}>
         <div className={css.about__film}>
            <h2 className={css.about__title}>
               {data.isSeries ? "О сериале" : "О фильме"}
            </h2>

            {renderDataBefore.map(({ title, value }, i) => (
               <AboutInfoContainer
                  key={i}
                  title={title}
               >
                  {/*  */}
                  {value}
               </AboutInfoContainer>
            ))}

            {professions.map((profession) => (
               <AboutInfoContainer
                  isClamp={true}
                  key={profession}
                  title={profession}
                  profession={profession}
                  isList={true}
               />
            ))}

            {renderDataAfter.map(({ title, value, className }) => (
               <AboutInfoContainer
                  key={title}
                  title={title}
                  className={className}
               >
                  {value}
               </AboutInfoContainer>
            ))}
         </div>
      </div>
   );
};

export default DetailedInfo;
