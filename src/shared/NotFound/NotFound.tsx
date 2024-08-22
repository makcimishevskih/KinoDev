import css from "./NotFound.module.scss";

const NotFound = ({ children }: { children: string | React.ReactNode }) => {
   return <h2 className={css.notFound}>{children}</h2>;
};
export default NotFound;
