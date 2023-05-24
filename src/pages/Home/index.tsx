import { useState } from "react";

import Buttons from "@/components/Buttons.component";
import Checkbox from "@/components/Checkbox.component";
import DropDown from "@/components/DropDown.component";
import Inputs from "@/components/Inputs.component";
import RadioButtons from "@/components/RadioButtons.component";
import Tumbler from "@/components/Tumbler.component";

import styles from "@/styles/pages/Home.module.scss";

const Home = () => {
      const [radioValue, setRadioValue] = useState<null | number>(null);
      const [dropDownValue, setDropDownValue] = useState<null | string>(null);

      const [inputsError, setInputsError] = useState<null | boolean>(null);
      const [inputValue, setInputValue] = useState<string>("");

      const getDataHandler = () => {
            if (inputsError) {
                  alert("ошибка");
                  return;
            }

            const info = {
                  userName: inputValue,
                  dropDownTitle: dropDownValue,
                  radioSelection: radioValue,
            };

            alert(JSON.stringify(info));
      };

      return (
            <main className={styles.container}>
                  <section className={styles.wrapper}>
                        <Inputs setInputsError={setInputsError} setInputValue={setInputValue} />
                        <Checkbox />
                        <Tumbler />
                        <RadioButtons setRadioValue={setRadioValue} />
                        <DropDown setDropDownValue={setDropDownValue} />
                        <Buttons onClick={getDataHandler} />
                  </section>
            </main>
      );
};

export default Home;
