import { useState, useEffect, useRef, FC } from 'react';
import styles from './ForecastPage.module.scss';
import { useAppDispatch } from '../../utils/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button/Button';
import ForecastTable from '../../components/Table/Table';
import LabelsMenu from '../../components/Labels/LabelsMenu';
import Filter from '../../components/Filter/Filter';
import Filter from '../../components/Filter/Sidebar';
import { useReactToPrint } from 'react-to-print';
import { exportToExcel } from '../../utils/utils';
import { forecastDataMany } from '../../utils/forecast_archive';

const ForecastPage: FC = () => {
  const dispatch = useAppDispatch();

  const tableRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    //   pageStyle: `
    //   @page {
    //     size: landscape;
    //     width: 100%;
    //   }
    // `,
  });

  return (
    <main
      id='forecast'
      className={styles.forecast}>
      <Filter />
      <div className={styles.container}>
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
            <button
              className={`${styles.button} ${styles.button_print}`}
              onClick={handlePrint}>
              <p className={`${styles.button__text} ${styles.button__text_print}`}>Напечатать</p>
              <div className={`${styles.button__icon} ${styles.button__icon_print}`}></div>
            </button>
            <button
              className={`${styles.button} ${styles.button_excel}`}
              onClick={() => exportToExcel(forecastDataMany)}>
              <p className={`${styles.button__text} ${styles.button__text_excel}`}>Выгрузить в Excel</p>
              <div className={`${styles.button__icon} ${styles.button__icon_excel}`}></div>
            </button>
          </div>
        </div>
        <div ref={tableRef}>
          <ForecastTable data={forecastDataMany} />
        </div>
      </div>
    </main>
  );
};
export default ForecastPage;
