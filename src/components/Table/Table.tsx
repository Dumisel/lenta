import React from 'react';
import { ConfigProvider, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

import styles from './Table.module.scss';

interface DataType {
  key: React.Key;
  ТК: string;
  group: string;
  category: string;
  subcategory: string;
  product: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ТК',
    dataIndex: 'ТК',
    sorter: {
      // compare: (a, b) => a.category - b.category,
      multiple: 2,
    },
    filterIcon: <div>i</div>,
    width: '4.57vw',
  },
  {
    title: 'Группа',
    dataIndex: 'group',
    sorter: {
      // compare: (a, b) => a.group - b.group,
      multiple: 3,
    },
    width: '9.375vw',
  },
  {
    title: 'Категория',
    dataIndex: 'category',
    sorter: {
      // compare: (a, b) => a.category - b.category,
      multiple: 2,
    },
    width: '8.22vw',
  },
  {
    title: 'Подкатегория',
    dataIndex: 'subcategory',
    sorter: {
      // compare: (a, b) => a.subcategory - b.subcategory,
      multiple: 1,
    },
    width: '8.22vw',
  },
  {
    title: 'Товар',
    dataIndex: 'product',
    sorter: {
      // compare: (a, b) => a.subcategory - b.subcategory,
      multiple: 1,
    },
    width: '8.22vw',
  },
  {
    title: '01.02.23',
    dataIndex: '1day',
    width: '4.17vw',
  },
  {
    title: '02.02.23',
    dataIndex: '2day',
    width: '4.17vw',
  },
  {
    title: '03.02.23',
    dataIndex: '3day',
    width: '4.17vw',
  },
  {
    title: '04.02.23',
    dataIndex: '4day',
    width: '4.17vw',
  },
  {
    title: '05.02.23',
    dataIndex: '5day',
    width: '4.17vw',
  },
  {
    title: '03.02.23',
    dataIndex: '5day',
    width: '4.17vw',
  },
  {
    title: '06.02.23',
    dataIndex: '6day',
    width: '4.17vw',
  },
  {
    title: '07.02.23',
    dataIndex: '7day',
    width: '4.17vw',
  },
  {
    title: '08.02.23',
    dataIndex: '8day',
    width: '4.17vw',
  },
  {
    title: '09.02.23',
    dataIndex: '9day',
    width: '4.17vw',
  },
  {
    title: '10.02.23',
    dataIndex: '10day',
    width: '4.17vw',
  },
  {
    title: '11.02.23',
    dataIndex: '11day',
    width: '4.17vw',
  },
  {
    title: '12.02.23',
    dataIndex: '12day',
    width: '4.17vw',
  },
  {
    title: '13.02.23',
    dataIndex: '13day',
    width: '4.17vw',
  },
  {
    title: '14.02.23',
    dataIndex: '14day',
    width: '4.17vw',
  },
];

const data: DataType[] = [
  {
    key: '1',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Итальянский',
  },
  {
    key: '2',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Прованс',
  },
  {
    key: '3',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Финский',
  },
  {
    key: '4',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Французский, мини',
  },
  {
    key: '5',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Французский, мини',
  },
  {
    key: '6',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Французский, мини',
  },
  {
    key: '7',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Французский, мини',
  },
  {
    key: '8',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Французский, мини',
  },
  {
    key: '9',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Французский, мини',
  },
  {
    key: '10',
    ТК: 'id123545',
    group: 'Хлеб собственного производства',
    category: 'Багеты и булочки',
    subcategory: 'Национальные',
    product: 'Багет Французский, мини',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const ForecastTable: React.FC = () => (
  <ConfigProvider
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
        },
      },
    }}>
    <Table
      rowClassName={(record, index) => (index % 2 === 0 ? styles.rowLight : styles.rowDark)}
      className={styles.table}
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={false}
      sticky={true}
      scroll={{ x: 1500 }}
    />
  </ConfigProvider>
);

export default ForecastTable;
