import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../services/store";
import { selectCity, selectVenue } from "../../services/modalSlice";
import { storesData } from "../../utils/stores";
import styles from "./Modal.module.scss";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCity = useSelector((state: RootState) => state.modal.selectedCity);
  const selectedVenue = useSelector((state: RootState) => state.modal.selectedVenue);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectCity(event.target.value));
  };

  const handleVenueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectVenue(event.target.value));
    onClose();
    console.log(`Выбран ${event.target.value}`);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <h2>Выберите ваш ТК</h2>
        <div>
          <label>Город</label>
          <select onChange={handleCityChange} value={selectedCity || ''}>
            <option value="">Город</option>
            {storesData.data.map((item, index) => (
              <option key={index} value={item.city}>
                {item.city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>ТК</label>
          <select onChange={handleVenueChange} value={selectedVenue || ''}>
            <option value="">ТК</option>
            {selectedCity &&
              storesData.data
                .filter((item) => item.city === selectedCity)
                .map((item) => (
                  <option key={item.store} value={item.store}>
                    {item.store}
                  </option>
                ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Modal;
