import styles from "@/styles/components/Checkbox.module.scss";

const Checkbox = () => {
      return (
            <div className={styles.container}>
                  <input type="checkbox" className={styles.checkbox} id="checkbox" />
                  <label htmlFor="checkbox" className={styles.label}>
                        Remember me
                  </label>
            </div>
      );
};

export default Checkbox;
