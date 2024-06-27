import { IMenuItemProps } from "../../models/models.ts";
import "./menuItem.scss";
import { NavLink } from "react-router-dom";

export const MenuItem = (props: IMenuItemProps) => {
  const { title, href } = props;

  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "menu__item menu__item-active" : "menu__item";
  return (
    <NavLink className={active} to={href}>
      {title}
    </NavLink>
  );
};
