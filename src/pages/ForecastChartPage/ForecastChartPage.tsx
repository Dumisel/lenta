import { useState, useEffect } from 'react';
import styles from './ForecastChartPage.module.scss';
import { useAppDispatch } from '../../utils/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button/Button';
import ForecastTable from '../../components/Table/Table';
import LabelsMenu from '../../components/LabelsMenu/LabelsMenu';
import Filter from '../../components/Filter/Filter';
import ForecastChart from '../../components/ForecastChart/ForecastChart';
import { forecast } from '../../utils/forecast';
import SendBackButton from '../../components/SendBackButton/SendBackButton';

export default function ForecastPage() {
  const dispatch = useAppDispatch();

  return (
    <main
      id='forecast'
      className={styles.forecastChart}>
      <Filter />
      <div className={styles.container}>
        {forecast.data.length > 5 &&
          <SendBackButton />
        }
      <LabelsMenu />
      <div className={styles.controls}>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.button_print}`}>
            <p className={`${styles.button__text} ${styles.button__text_print}`}>Напечатать</p>
            <div className={`${styles.button__icon} ${styles.button__icon_print}`}></div>
          </button>
        </div>
      </div>
      <ForecastChart />
      </div>
    </main>
  );
}
