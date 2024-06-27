import { Paragraph } from "../../components/Paragraph";
import { Page } from "../../components/Page";

export const HomePage = () => {
  return (
    <Page title={"Гоночное такси"}>
      <Paragraph
        text={
          "Гоночное такси – отличная возможность насладиться скоростью и мастерством гонщика,\n" +
          "        сидя на месте штурмана, и стать свидетелем настоящего мастерства профессиональных\n" +
          "        инструкторов Сочи Автодрома, в полной мере ощутив крутые виражи на самой современной\n" +
          "        гоночной трассе России."
        }
      />
    </Page>
  );
};
