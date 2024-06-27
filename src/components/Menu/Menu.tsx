import classes from "./menu.module.scss";
import { MenuItem } from "../MenuItem";

export const Menu = () => {
  const menuItems = [
    { id: 1, title: "Главная", href: "/" },
    { id: 2, title: "Дрифт-такси", href: "/drift" },
    { id: 3, title: "Time Attack", href: "/timeattack" },
    { id: 4, title: "Forza Karting", href: "/forza" }
  ];
  return (
    <>
      <nav className={classes["menu"]}>
        {menuItems.map((item) => (
          <MenuItem key={item.id} title={item.title} href={item.href} />
        ))}
      </nav>
    </>
  );
};
