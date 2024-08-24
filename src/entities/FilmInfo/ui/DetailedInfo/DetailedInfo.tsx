import css from "./DetailedInfo.module.scss";

import cn from "classnames";
import FilmT from "@src/app/config/types";
import { professions } from "./config";
import { formatBudgetToUSD, formatShort } from "@src/shared/lib/helpers";

import NotFound from "@src/shared/ui/NotFound";
import DetailContainer from "./ui/DetailContainer/DetailContainer";

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
      filmDuration:
         data.movieLength &&
         `${Math.floor(data?.movieLength / 60) > 0 ? `${Math.floor(data?.movieLength / 60)} ч` : ""} ${Math.floor(data?.movieLength % 60) > 0 ? `${Math.floor(data?.movieLength % 60)} мин` : ""} `,
   };

   const renderDataBeforeProfessions = [
      { title: "Год производства", value: data.year },
      { title: "Страна", value: data.countries[0].name },
      {
         title: "Жанр",
         value: data.genres.map((genre, i) => (
            <DataItem
               key={i}
               i={i}
               len={data.genres.length}
               field1={genre.name}
            />
         )),
      },
      { title: "Слоган", value: data.slogan ? data.slogan : "-" },
   ];

   const renderDataAfterProfessions = [
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
            data.audience.map((aud, i) => (
               <DataItem
                  key={i}
                  i={i}
                  len={data.genres.length}
                  field1={aud.country}
                  field2={formatShort(aud.count)}
               />
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
         value: values.filmDuration,
      },
   ];

   return (
      <div className={cn(css.detail, className ?? "")}>
         <div className={css.detail__film}>
            <h2 className={css.detail__title}>
               {data.isSeries ? "О сериале" : "О фильме"}
            </h2>

            {renderDataBeforeProfessions.map(({ title, value }, i) => (
               <DetailContainer
                  key={i}
                  title={title}
               >
                  {value}
               </DetailContainer>
            ))}

            {professions.map((profession) => (
               <DetailContainer
                  isClamp={true}
                  key={profession}
                  title={profession}
                  profession={profession}
                  isList={true}
               />
            ))}

            {renderDataAfterProfessions.map(({ title, value, className }) => (
               <DetailContainer
                  key={title}
                  title={title}
                  className={className}
               >
                  {value}
               </DetailContainer>
            ))}
         </div>
      </div>
   );
};

const DataItem = ({
   len,
   field1,
   field2,
   i,
}: {
   len: number;
   field1: string;
   field2?: string;
   i: number;
}) => {
   return (
      <div className={cn(css.detail__value, "line-clamp-2")}>
         <span>{field1}</span>
         {field2 && <span>{field2}</span>}
         {i !== len - 1 ? ", " : ""}
      </div>
   );
};

export default DetailedInfo;
