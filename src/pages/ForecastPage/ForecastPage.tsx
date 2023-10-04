import { useState, useEffect } from 'react';
import styles from './ForecastPage.module.scss';
import { useAppDispatch } from '../../utils/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button/Button';
import ForecastTable from '../../components/Table/Table';

export default function ForecastPage() {
  const dispatch = useAppDispatch();

  return (
    <main
      id='forecast'
      className={styles.forecast}>
      <div className={styles.labels}>
        <div className={styles.label}>label</div>
        <div className={styles.label}>label</div>
      </div>
      <div className={styles.controls}>
        <div className={styles.switch}>
          <h1 className={styles.title}>Прогноз на 14 дней</h1>
          <button className={styles.statistics}>Статистика прогнозов</button>
        </div>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.button_chart}`}>
            <p className={`${styles.button__text} ${styles.button__text_chart}`}>Построить график</p>
            <div className={`${styles.button__icon} ${styles.button__icon_chart}`}></div>
          </button>
          <button className={`${styles.button} ${styles.button_print}`}>
            <p className={`${styles.button__text} ${styles.button__text_print}`}>Напечатать</p>
            <div className={`${styles.button__icon} ${styles.button__icon_print}`}></div>
          </button>
          <button className={`${styles.button} ${styles.button_excel}`}>
            <p className={`${styles.button__text} ${styles.button__text_excel}`}>Выгрузить в Excel</p>
            <div className={`${styles.button__icon} ${styles.button__icon_excel}`}></div>
          </button>
        </div>
      </div>
      <ForecastTable />
    </main>
  );
}
