import classes from "./page.module.scss";
import { IPageProps } from "../../models/models.ts";

export const Page = (props: IPageProps) => {
  const { title, children } = props;
  return (
    <article className={classes["article"]}>
      <h1 className={classes["article__title"]}>{title}</h1>
      {children}
    </article>
  );
};
