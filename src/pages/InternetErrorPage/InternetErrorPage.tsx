import { FC } from 'react';
import styles from '../NotFoundPage/NotFoundPage.module.scss';
import Header from '../../components/Header/Header';
import internet from '../../images/internetConnectionError.png';
import Filter from '../../components/Filter/Sidebar';
import SendBackButton from '../../components/SendBackButton/SendBackButton';

export const InternetErrorPage: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Filter />
        <div className={styles.container}>
          <img className={styles.image} src={internet} alt='Отсутствует подключение к интернету'/>
          <SendBackButton />
          <p className={styles.title}>
            Упс! Кажется у вас отсутствует подключение к интернету
          </p>
          <p className={styles.text}>
            Пожалуйста, убедитесь, что у вас есть доступ к сети, 
            чтобы продолжить использование функций приложения.
          </p>
        </div>
      </div>
    </>
  );
};

export default InternetErrorPage;
