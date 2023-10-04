import styles from './App.module.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dasboard';
import api from '../../utils/api';
import { Layout } from '../Layout/Layout';
import SignInPage from '../../pages/SignInPage/SignInPage';
import ForecastPage from '../../pages/ForecastPage/ForecastPage';

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
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<Dashboard />}
          />
          <Route
            path='/signin'
            element={<SignInPage />}
          />
          <Route
            path='/forecast'
            element={<ForecastPage />}
          />
          <Route
            path='/statistics'
            element={<Dashboard />}
          />

          <Route path='*' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
