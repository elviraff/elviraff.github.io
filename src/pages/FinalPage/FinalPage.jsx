import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/toolkitSlice";

export const FinalPage = () => {
    const dispatch = useDispatch()
  return (
      <div className={styles.root}>
        <div className={styles.contacts}>
          <div className={styles.contacts__wrapper}>
            <h1 className={styles.text}>ЗАЯВКА ПРИНЯТА</h1>
            <div className={styles.text}>Держите телефон под рукой. Скоро c Вами свяжется наш менеджер.</div>
          </div>
        </div>
            <Link className={styles.button_link} to="/home" onClick={()=> dispatch(setModal(false))}>X</Link>
      </div>
  );
};
