import React, { FC } from 'react';
import ruRU from 'antd/locale/ru_RU';
import { ConfigProvider, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

import styles from './Table.module.scss';
import { forecastData, forecastDataMany } from '../../utils/forecast_archive';
import { formatDate } from '../../utils/utils';

interface DataType {
  key: React.Key;
  ТК: string;
  group: string;
  category: string;
  subcategory: string;
  product: string;
  forecast_date: string;
  [key: string]: number | React.Key;
}

// forecastData
const columns: ColumnsType<DataType> = [
  {
    title: 'ТК',
    dataIndex: 'ТК',
    // filtered: true,
    sorter: {
      compare: (a, b) => a.ТК.localeCompare(b.ТК),
    },
    filterIcon: (filtered) => <p style={{ color: filtered ? '#1890ff' : undefined }}>qq</p>,
    width: 'calc(4.57vw + 32px)',

    className: styles.columnTitle,
    showSorterTooltip: false,
    render: (text) => (
      <div
        style={{ width: '4.57vw', whiteSpace: 'normal', boxSizing: 'border-box' }}
        className={styles.cell}>
        {text}
      </div>
    ),
  },
  {
    title: 'Группа',
    dataIndex: 'group',
    sorter: {
      compare: (a, b) => a.group.localeCompare(b.group),
    },
    width: 'calc(9.375vw + 32px)',
    // width: '9.375vw',
    className: styles.columnTitle,
    showSorterTooltip: false,
    render: (text) => (
      <div
        style={{ width: '9.375vw', whiteSpace: 'normal', boxSizing: 'border-box' }}
        className={styles.cell}>
        {text}
      </div>
    ),
  },
  {
    title: 'Категория',
    dataIndex: 'category',
    sorter: {
      compare: (a, b) => a.category.localeCompare(b.category),
    },
    width: 'calc(9.375vw + 32px)',
    className: styles.columnTitle,
    showSorterTooltip: false,
    render: (text) => (
      <div
        style={{ width: '9.375vw', whiteSpace: 'normal', boxSizing: 'border-box' }}
        className={styles.cell}>
        {text}
      </div>
    ),
  },
  {
    title: 'Подкатегория',
    dataIndex: 'subcategory',
    showSorterTooltip: false,
    sorter: {
      compare: (a, b) => a.subcategory.localeCompare(b.subcategory),
    },
    width: 'calc(9.375vw + 32px)',
    className: styles.columnTitle,
    render: (text) => (
      <div
        style={{ width: '9.375vw', whiteSpace: 'normal', boxSizing: 'border-box' }}
        className={styles.cell}>
        {text}
      </div>
    ),
  },
  {
    title: 'Товар',
    dataIndex: 'product',
    sorter: {
      compare: (a, b) => a.product.localeCompare(b.product),
    },
    width: 'calc(9.375vw + 32px)',
    className: styles.columnTitle,
    showSorterTooltip: false,
    render: (text) => (
      <div
        style={{ width: '9.375vw', whiteSpace: 'normal', boxSizing: 'border-box' }}
        className={styles.cell}>
        {text}
      </div>
    ),
  },
  // {
  //   title: '01.02.23',
  //   dataIndex: '1',
  //   // width: '4.17vw',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '02.02.23',
  //   dataIndex: '2',
  //   // width: '4.17vw',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '03.02.23',
  //   dataIndex: '3',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '04.02.23',
  //   dataIndex: '4',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '05.02.23',
  //   dataIndex: '5',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '03.02.23',
  //   dataIndex: '5',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '06.02.23',
  //   dataIndex: '6',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '07.02.23',
  //   dataIndex: '7',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '08.02.23',
  //   dataIndex: '8',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '09.02.23',
  //   dataIndex: '9',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '10.02.23',
  //   dataIndex: '10',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '11.02.23',
  //   dataIndex: '11',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '12.02.23',
  //   dataIndex: '12',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '13.02.23',
  //   dataIndex: '13',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  // {
  //   title: '14.02.23',
  //   dataIndex: '14',
  //   width: 'calc(4.17vw + 32px)',
  //   className: styles.columnTitle,
  //   render: (text) => (
  //     <div
  //       style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
  //       className={styles.cell}>
  //       {text}
  //     </div>
  //   ),
  // },
  ...Object.keys(forecastData.data[0].forecast).map((date) => ({
    title: formatDate(date),
    dataIndex: date,
    key: date,
    width: 'calc(4.17vw + 32px)',
    className: styles.columnTitle,
    render: (text: string) => (
      <div
        style={{ width: '4.17vw', textAlign: 'end', boxSizing: 'border-box' }}
        className={styles.cell}>
        {text}
      </div>
    ),
  })),
];

// const data: DataType[] = [
//   {
//     'key': '1',
//     'ТК': 'id123545',
//     'group': 'Хлеб собственного производства',
//     'category': 'Багеты и булочки',
//     'subcategory': 'Национальные',
//     'product': 'Багет Итальянский',
//     '01.09.2023': '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     11: '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
//   {
//     key: '2',
//     ТК: 'id123545',
//     group: 'Хлеб собственного производства',
//     category: 'Багеты и булочки',
//     subcategory: 'Национальные',
//     product: 'Багет Прованс',
//     1: '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     11: '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
//   {
//     key: '3',
//     ТК: 'id123545',
//     group: 'Хлеб собственного производства',
//     category: 'Багеты и булочки',
//     subcategory: 'Национальные',
//     product: 'Багет Финский',
//     1: '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     11: '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
//   {
//     key: '4',
//     ТК: 'id123545',
//     group: 'Хлеб собственного производства',
//     category: 'Багеты и булочки',
//     subcategory: 'Национальные',
//     product: 'Багет Французский, мини',
//     1: '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     11: '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
//   {
//     key: '5',
//     ТК: 'id123545',
//     group: 'Хлеб собственного производства',
//     category: 'Багеты и булочки',
//     subcategory: 'Национальные',
//     product: 'Багет Французский, мини',
//     1: '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     11: '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
//   {
//     key: '6',
//     ТК: 'id123545',
//     group: 'Хлеб собственного производства',
//     category: 'Багеты и булочки',
//     subcategory: 'Национальные',
//     product: 'Багет Французский, мини',
//     1: '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     11: '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
//   {
//     key: '7',
//     ТК: 'id123545',
//     group: 'Хлеб собственного производства',
//     category: 'Багеты и булочки',
//     subcategory: 'Национальные',
//     product: 'Багет Французский, мини',
//     1: '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     11: '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
//   {
//     'key': '8',
//     'ТК': 'id123545',
//     'group': 'Хлеб собственного производства',
//     'category': 'Багеты и булочки',
//     'subcategory': 'Национальные',
//     'product': 'Багет Французский, мини',
//     1: '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     '11.09.2023': '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
//   {
//     key: '9',
//     ТК: 'id123545',
//     group: 'Хлеб собственного производства',
//     category: 'Багеты и булочки',
//     subcategory: 'Национальные',
//     product: 'Багет Французский, мини',
//     1: '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     11: '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
//   {
//     key: '10',
//     ТК: 'id123545',
//     group: 'Хлеб собственного производства',
//     category: 'Багеты и булочки',
//     subcategory: 'Национальные',
//     product: 'Багет Французский, мини',
//     1: '11',
//     2: '12',
//     3: '31',
//     4: '141',
//     5: '1',
//     6: '61',
//     7: '8',
//     8: '12',
//     9: '13',
//     10: '1',
//     11: '0',
//     12: '99',
//     13: '15',
//     14: '13',
//   },
// ];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

interface ITable {
  data: any;
}

const ForecastTable: FC<ITable> = ({ data }) => {
  const dataSource = data.data.map((item: any) => ({
    key: item.forecast_date, // Ключ для строки таблицы
    ТК: item.store,
    product: item.sku,
    group: 'string',
    category: 'string',
    subcategory: 'string',
    forecast_date: item.forecast_date,
    ...item.forecast, // Распаковываем данные прогноза в отдельные колонки
  }));

  console.log(dataSource);
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        components: {
          Table: {
            headerBg: 'rgba(182, 202, 255, 0.40)',
            headerColor: '#2C2A29',
            headerBorderRadius: 12,
            borderColor: 'none',
            rowHoverBg: 'none',
            headerFilterHoverBg: 'rgba(182, 202, 255, 0.40)',
            headerSortActiveBg: 'rgba(182, 202, 255, 0.40)',
            headerSortHoverBg: 'rgba(182, 202, 255, 0.40)',
            bodySortBg: 'none',
            stickyScrollBarBorderRadius: 1,
            stickyScrollBarBg: 'rgba(182, 202, 255, 0.4)',
          },
        },
      }}>
      <Table
        rowClassName={(record, index) => (index % 2 === 0 ? styles.rowLight : styles.rowDark)}
        className={styles.table}
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
        pagination={false}
        sticky={true}
        scroll={{ x: true }}
        // loading
      />
    </ConfigProvider>
  );
};

export default ForecastTable;
