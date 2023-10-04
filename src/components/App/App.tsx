import styles from './App.module.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dasboard';
import api from '../../utils/api';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import InternetErrorPage from '../../pages/InternetErrorPage/InternetErrorPage';
import DataErrorPage from '../../pages/DataErrorPage/DataErrorPage';
import ExportErrorPage from '../../pages/ExportErrorPage/ExportErrorPage';
import PrintErrorPage from '../../pages/PrintErrorPage/PrintErrorPage';

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
  
            <Route path="*" element={<NotFoundPage />} />
             {/** Тестовые страницы с ошибками */}
            <Route path="internet" element={<InternetErrorPage />} />
            <Route path="data" element={<DataErrorPage />} />
            <Route path="print" element={<PrintErrorPage />} />
            <Route path="export" element={<ExportErrorPage />} />
          </Routes>
        </div>
    );
}

export default App;
