import React from "react";
import { storesData } from "../../utils/stores";
import styles from "./Sidebar.module.scss";

const Filter: React.FC = () => {
 

  return (
    <div className={styles.sidebar}>
      <h2>Sidebar</h2>
      <div className="dropdown">
        <h3>Select Cities</h3>
        <ul>
          {storesData.data.map((item) => (
            <li key={item.city}>
              <label>
                {item.city}
              </label>
            </li>
          ))}
        </ul>
      </div>
      </div>
      )   
};

export default Filter;


