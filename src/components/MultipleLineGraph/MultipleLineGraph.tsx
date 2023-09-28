import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import styles from "./MultipleGraph.module.scss"

interface ForecastData {
  store: string;
  forecast_date: string;
  forecast: {
    sku: string;
    sales_units: { [date: string]: number };
  };
}

interface Props {
  data: ForecastData[];
}

const MultipleLineGraph: React.FC<Props> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const currentStore = useSelector((state: RootState) => state.modal.selectedVenue);
  const currentSku = useSelector((state: RootState) => state.filter.selectedSku);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        //находим sku
        const filteredData = data.filter((forecast) =>
          currentStore?.includes(forecast.store)
          &&
          currentSku?.includes(forecast.forecast.sku) 
        );

        console.log(filteredData);

        if (!filteredData || filteredData.length === 0) {
          return;
        }

        // отрисовываем график
          const datasets = filteredData.map((item) => ({
          label: item.forecast.sku,
          data: Object.values(item.forecast.sales_units),
          borderColor: "blue",
          fill: false,
        }));

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: Object.keys(filteredData[0].forecast.sales_units),
            datasets,
          },
          options: {
            responsive: true,
            scales: {
              x: {
                title: {
                  display: false,
                },
              },
              y: {
                title: {
                  display: false,
                },
              },
            },
          },
        });
      }
    }
}, [data, currentStore, currentSku]);

  return (
    <div className={styles.graph}>
      {currentSku && <canvas ref={chartRef} id="chart" />}
    </div>
  );
};

export default MultipleLineGraph;
