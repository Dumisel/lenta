import styles from './App.module.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dasboard';
import api from '../../utils/api';

function App() {
    useEffect(() => {
        handleGetSalesData();
        handleGetForecastData();
        handleGetStoresData();
        handleGetCategoriesData();
    }, []);

    const handleGetSalesData = () => {
        const salesData = api.getSalesData();
        console.log(salesData, 'salesData');
    };

    const handleGetForecastData = () => {
        const foreCastData = api.forecastData();
        console.log(foreCastData, 'foreCastData');
    };

    const handleGetStoresData = () => {
        const storesData = api.storesData();
        console.log(storesData, 'storesData');
    };

    const handleGetCategoriesData = () => {
        const categoriesData = api.categoriesData();
        console.log(categoriesData, 'categoriesData');
    };

    return (
        <div className={styles.page}>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="signin" />
            <Route path="forecast" />
            <Route path="statistics" />
  
            <Route path="*" />
          </Routes>
        </div>
    );
}

export default App;
