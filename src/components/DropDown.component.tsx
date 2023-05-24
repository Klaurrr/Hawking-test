import { Dispatch, FC, SetStateAction, useState } from "react";

import icons from "@/assets/icons";

import Image from "next/image";

import clsx from "clsx";

import styles from "@/styles/components/DropDown.module.scss";

interface Props {
      setDropDownValue: Dispatch<SetStateAction<string | null>>;
}

const DropDown: FC<Props> = ({ setDropDownValue }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [optionValue, setOptionValue] = useState("Dropdown option");

      const optionHandler = (option: string) => {
            setOptionValue(option);
            setDropDownValue(option);
            setIsOpen(false);
      };

      return (
            <article className={styles.container}>
                  <h6>DropDown Title</h6>
                  <div className={styles.wrapper}>
                        <div
                              className={
                                    isOpen ? clsx(styles.select, styles.openned) : styles.select
                              }
                              onClick={() => setIsOpen(!isOpen)}
                        >
                              {optionValue}
                              <Image
                                    src={icons.arrow.src}
                                    alt={"arrow-png"}
                                    width={12}
                                    height={7}
                                    className={isOpen ? styles.rotated : ""}
                              />
                        </div>
                        {isOpen && (
                              <div className={styles.drop__menu}>
                                    {[
                                          "Dropdown option",
                                          "Dropdown option 1",
                                          "Dropdown option 2",
                                    ].map((option, index) => (
                                          <div onClick={() => optionHandler(option)} key={index}>
                                                {option}
                                          </div>
                                    ))}
                              </div>
                        )}
                  </div>
            </article>
      );
};

export default DropDown;
