import { FC } from 'react';
import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import mockPerson from '../../images/person.jpeg';
import { useAppDispatch, useAppSelector } from '../../utils/reduxHooks';
import { selectUser, signOut } from '../../services/redux/slices/user/user';

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="Логотип Лента" />
      <div className={styles.header__container}>
        {/* {user.token ? ( */}
        <div className={styles.header__user}>
          <img
            className={styles.header__userpic}
            src={mockPerson}
            alt="Ваша фотография"
          />
          <div className={styles.header__userinfo}>
            <p className={styles.header__username}>Иванов Иван Иванович</p>
            <p className={styles.header__userposition}>Региональный директор</p>
          </div>
        </div>
        {/* ) : null} */}
        <button
          className={styles.header__logout}
          onClick={() => dispatch(signOut())}
        />
      </div>
    </header>
  );
};

export default Header;
