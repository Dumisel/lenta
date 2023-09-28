import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { selectGroup, selectCategory, selectSubcategory, updateFilters } from "../../services/filterSlice"; //подумать про фильтрацию
import { categoriesData } from "../../utils/categories";
import styles from "./FilterSidebar.module.scss";

const FilterSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state: RootState) => state.filter.selectedGroup);
  const selectedCategory = useSelector((state: RootState) => state.filter.selectedCategory);
  const selectedSubcategory = useSelector((state: RootState) => state.filter.selectedSubcategory);
  const selectedSku= useSelector((state: RootState) => state.filter.selectedSku);

  //стоит ли записывать фильтры в стор или хранить в стейте?
  const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectGroup(event.target.value));
  };
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectCategory(event.target.value));
  };
  const handleSubcategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectSubcategory(event.target.value));
  };
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //записываем выбранный продукт/sku в стор
    dispatch(updateFilters(event.target.value));
  };

  return (
    <div className={styles.sidebar}>
      <h2>Выберите sku</h2>
        <div>
          <select onChange={handleGroupChange} value={selectedGroup || ''}>
            <option value="">Группа</option>
            {categoriesData.data.map((item, index) => (
              <option key={index} value={item.group}>
                {item.group}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select onChange={handleCategoryChange} value={selectedCategory || ''}>
            <option value="">Категория</option>
            {categoriesData.data.map((item, index) => (
              <option key={index} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select onChange={handleSubcategoryChange} value={selectedSubcategory || ''}>
            <option value="">Подкатегория</option>
            {categoriesData.data.map((item, index) => (
              <option key={index} value={item.subcategory}>
                {item.subcategory}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select onChange={handleFilterChange} value={selectedSku || ''}>
            <option value="">Sku</option>
            {categoriesData.data.map((item, index) => (
              <option key={index} value={item.sku}>
                {item.sku}
              </option>
            ))}
          </select>
        </div>
    </div>
  );
};

export default FilterSidebar;
