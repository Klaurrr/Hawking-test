import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";

import Image from "next/image";

import icons from "@/assets/icons";

import styles from "@/styles/components/Inputs.module.scss";

interface Props {
      setInputsError: Dispatch<SetStateAction<boolean | null>>;
      setInputValue: Dispatch<SetStateAction<string>>;
}

const Inputs: FC<Props> = ({ setInputsError, setInputValue }) => {
      const {
            register,
            handleSubmit,
            formState: { errors },
            setValue,
      } = useForm();

      const onSubmit = (data: any, e: any) => {
            e?.preventDefault();

            setValue("Name", "");
            setValue("Password", "");

            console.log(data);
      };

      useEffect(() => {
            if (Object.entries(errors).length !== 0) {
                  setInputsError(true);
            }
      }, [errors]);

      return (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.input__wrapper}>
                        <h6>Username</h6>
                        <div className={styles.input__inner}>
                              <input
                                    type="text"
                                    placeholder="Enter username"
                                    className={errors.Name && styles.error__input}
                                    {...register("Name", {
                                          required: true,
                                          minLength: 2,
                                    })}
                                    onChange={(e) => setInputValue(e.target.value)}
                              />
                              {errors.Name && (
                                    <Image
                                          src={icons.warning.src}
                                          alt={"warning-png"}
                                          className={styles.warning}
                                          width={20}
                                          height={20}
                                    />
                              )}
                        </div>
                  </div>
                  <div className={styles.input__wrapper}>
                        <h6>Password</h6>
                        <div className={styles.input__inner}>
                              <input
                                    type="password"
                                    placeholder="Enter password"
                                    className={errors.Password && styles.error__input}
                                    {...register("Password", {
                                          required: true,
                                          minLength: 4,
                                          maxLength: 12,
                                    })}
                              />
                              {errors.Password && (
                                    <Image
                                          src={icons.warning.src}
                                          alt={"warning-png"}
                                          className={styles.warning}
                                          width={20}
                                          height={20}
                                    />
                              )}
                        </div>
                        <p className={errors.Password && styles.error__p}>
                              Your password is between 4 and 12 characters
                        </p>
                  </div>
            </form>
      );
};

export default Inputs;
