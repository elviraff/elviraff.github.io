import styles from './styles.module.css'
import image from './qr-code.png'
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.element}>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</div>
      <img className={styles.element} src={image} alt="" />
      <div className={styles.element}>Сканируйте QR-код или нажмите ОК</div>
      <button className={styles.button}>
        <Link className = {styles.link} to='/contacts'>
            OK
        </Link>
      </button>
    </div>
  );
};
