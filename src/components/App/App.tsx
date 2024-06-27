import "./app.module.scss";
import { Routes, Route } from "react-router-dom";
import { Menu } from "../Menu";
import { HomePage } from "../../pages/HomePage";
import { DriftPage } from "../../pages/DriftPage";
import { TimeAttackPage } from "../../pages/TimeAttackPage";
import { ForzaPage } from "../../pages/ForzaPage";
import classes from "./app.module.scss";

export const App = () => {
  return (
    <div>
      <Menu />

      <div className={classes["page"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
};
