import { Dispatch, FC, SetStateAction, useState } from "react";

import styles from "@/styles/components/RadioButtons.module.scss";

interface Props {
      setRadioValue: Dispatch<SetStateAction<null | number>>;
}

const RadioButtons: FC<Props> = ({ setRadioValue }) => {
      return (
            <article className={styles.container}>
                  <div>
                        <input id="radio-1" type="radio" name="radio" />
                        <label htmlFor="radio-1" onClick={() => setRadioValue(1)}>
                              Radio selection 1
                        </label>
                  </div>
                  <div>
                        <input id="radio-2" type="radio" name="radio" />
                        <label htmlFor="radio-2" onClick={() => setRadioValue(2)}>
                              Radio selection 2
                        </label>
                  </div>
                  <div>
                        <input id="radio-3" type="radio" name="radio" />
                        <label htmlFor="radio-3" onClick={() => setRadioValue(3)}>
                              Radio selection 3
                        </label>
                  </div>
            </article>
      );
};

export default RadioButtons;
