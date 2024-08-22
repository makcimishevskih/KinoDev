import css from "./SequelsPrequels.module.scss";

import Slider from "./ui/Slider";
import { MoviesT } from "@src/app/config/types";

interface SequelsPrequelsProps {
   sequelsPrequels: MoviesT[] | null;
}

const SequelsPrequels = ({ sequelsPrequels }: SequelsPrequelsProps) => {
   if (!sequelsPrequels || sequelsPrequels.length === 0) {
      return null;
   }

   return (
      <>
         <h2 className={css.title}>Сиквелы, приквелы и ремейки</h2>
         <Slider sequelsPrequels={sequelsPrequels} />
      </>
   );
};
export default SequelsPrequels;
