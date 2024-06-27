import { Page } from "../../components/Page";
import { Paragraph } from "../../components/Paragraph";

export const ForzaPage = () => {
  return (
    <Page title={"Forza Karting Sochi"}>
      <Paragraph
        text={
          "В Олимпийском парке работает новый открытый развлекательный картинг центр мирового уровня!"
        }
      />
      <Paragraph
        text={
          "Вас ждут большая, широкая, безопасная трасса и супер современные карты\n" +
          "        европейского производства c двигателями мощностью 13 л.с.\n" +
          "        Трасса длинной более 500 метров  оборудована системой хронометража,\n" +
          "        фиксирующей данные заезда в режиме реального времени.\n" +
          "        По окончании заезда каждый пилот получает распечатку со своими результатами."
        }
      />
    </Page>
  );
};
