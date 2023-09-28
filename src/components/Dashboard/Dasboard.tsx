import { FC } from 'react';
import styles from './Dasboard.module.scss';
import Header from '../Header/Header';

export const Dashboard: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.dashboard}>dashboard</div>
    </>
  );
};
