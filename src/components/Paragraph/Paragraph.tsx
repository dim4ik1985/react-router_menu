import classes from "./paragraph.module.scss";
import { IParagraphProps } from "../../models/models.ts";

export const Paragraph = (props: IParagraphProps) => {
  return <p className={classes["article__paragraph"]}>{props.text}</p>;
};
