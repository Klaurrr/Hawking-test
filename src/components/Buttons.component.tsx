import { FC } from "react";

import styles from "@/styles/components/Buttons.module.scss";

interface Props {
      onClick: () => void;
}

const Buttons: FC<Props> = ({ onClick }) => {
      return (
            <div className={styles.container}>
                  <button>Cancel</button>
                  <button onClick={onClick}>Next</button>
            </div>
      );
};

export default Buttons;
