import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { deleteMobileNumber, setMobileNumber } from "../../store/toolkitSlice";

export const Keyboard = ({ name }) => {
  const [keyValue, setKeyValue] = useState("1");
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={styles.key}
        onClick={() => {
          name == "Стереть"
            ? dispatch(deleteMobileNumber())
            : dispatch(setMobileNumber(name));
        }}
      >
        {name}
      </button>
    </>
  );
};
