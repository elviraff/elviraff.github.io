import styles from "./styles.module.css";
import { numbers } from "../../constants";
import { Keyboard } from "../../components/Keyboard/Keyboard";
import { useDispatch, useSelector } from "react-redux";
import toolkitSlice, {
  deleteMobileNumber,
  setCheckedData,
  setMobileNumber,
  setModal,
} from "../../store/toolkitSlice";
import { Link } from "react-router-dom";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const mobileNumber = useSelector((state) => state.toolkit.mobileNumber);
  const checked = useSelector((state) => state.toolkit.checkedData);

  const deleteMobileNumberBackspace = (e) => {
    if (e.key == "Backspace") {
      dispatch(deleteMobileNumber());
    } else if (numbers.includes(e.key)) {
      dispatch(setMobileNumber(e.key));
    }
  };

  return (
    <div
      className={styles.root}
      onKeyDown={(e) => deleteMobileNumberBackspace(e)}
    >
      <div className={styles.contacts}>
        <div className={styles.contacts__wrapper}>
          <h2 className={styles.text}>Введите ваш номер мобильного телефона</h2>
          <input
            className={styles.input}
            type="text"
            name=""
            id=""
            value={mobileNumber}
            placeholder="+7 (___)___-__-__"
          />
          <div className={styles.text}>
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </div>
          <div className={styles.keyboard}>
            {numbers.map((item) => (
              <Keyboard key={item} name={item} />
            ))}
          </div>
          <div className={styles.personal_data}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => dispatch(setCheckedData(!checked))}
            />
            <div className={styles.personal_data__text}>
              Согласие на обработку персональных данных
            </div>
          </div>
          <button
            disabled={true}
            className={
              checked && mobileNumber.length == 14
                ? styles.buttonActive
                : styles.buttonInactive
            }
          >
            <Link
              className={
                checked && mobileNumber.length == 14
                  ? styles.enabled_link
                  : styles.disabled_link
              }
              to="/final"
            >
              Подтвердить номер
            </Link>
          </button>
        </div>
      </div>
      <div>
        <button>
          <Link to="/home" onClick={dispatch(setModal(false))}>
            X
          </Link>
        </button>
      </div>
    </div>
  );
};
