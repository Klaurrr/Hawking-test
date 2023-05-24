import { useState } from "react";

import styles from "@/styles/components/Tumbler.module.scss";

const Tumbler = () => {
      const [isEnabled, setIsEnabled] = useState(false);

      return (
            <article className={styles.container}>
                  <label className={styles.switch}>
                        <input
                              type="checkbox"
                              className={styles.input}
                              onClick={() => setIsEnabled(!isEnabled)}
                        />
                        <span className={styles.round}></span>
                  </label>
                  <p className={styles.state}>{isEnabled ? "On" : "Off"}</p>
            </article>
      );
};

export default Tumbler;
