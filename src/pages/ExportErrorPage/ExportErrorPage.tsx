import { FC } from 'react';
import styles from '../NotFoundPage/NotFoundPage.module.scss';
import Header from '../../components/Header/Header';
import exportError from '../../images/exportError.png';
import Filter from '../../components/Filter/Sidebar';
import SendBackButton from '../../components/SendBackButton/SendBackButton';

export const ExportErrorPage: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Filter />
        <div className={styles.container}>
          <img className={styles.image} src={exportError} alt='Ошибка выгрузки файла'/>
          <SendBackButton />
          <p className={styles.title}>
            Упс! Не удалось экспортировать выбранный прогноз
          </p>
          <p className={styles.text}>
            Возможно у вас недостаточно прав доступа к папке для 
            выгрузки файла. Убедитесь, что у вас есть права на чтение 
            и запись в эту папку и повторите попытку экспорта.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExportErrorPage;
