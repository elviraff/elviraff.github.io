import styles from "./styles.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";


export const Modal = ({ active, children, setFunc }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={
        active
          ? classNames(styles.modal_active, styles.modal)
          : classNames(styles.modal)
      }
      onClick={() => dispatch(setFunc(false))}
    >
      <div
        className={
          active
            ? classNames(styles.modal__content_active, styles.modal__content)
            : classNames(styles.modal__content)
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
