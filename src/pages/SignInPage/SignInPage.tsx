import { useState, useEffect } from 'react';
import styles from './SignInPage.module.scss';

import eye_opened from '../../images/eye_opened.svg';
import { useAppDispatch } from '../../utils/reduxHooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signInUser } from '../../services/redux/slices/user/user';
import { useNavigate } from 'react-router-dom';

interface ISignInFields {
  login: string;
  password: string;
}

export default function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm<ISignInFields>({ mode: 'onChange' });

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  useEffect(() => {
    setIsPasswordHidden(true);
  }, []);

  function togglePassword() {
    setIsPasswordHidden(!isPasswordHidden);
  }

  console.log(isValid);
  const onSubmit: SubmitHandler<ISignInFields> = () => {
    const formValues = getValues();

    dispatch(signInUser(formValues))
      .unwrap()
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <main
      id='sign-in'
      className={styles.signIn}>
      <h1 className={styles.signIn__title}>Для входа введите логин и пароль</h1>
      <form
        className={styles.signIn__form}
        // onSubmit={handleSubmit}
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <input
          className={styles.signIn__input}
          type='text'
          placeholder='Введите логин'
          // error={errors?.login?.message}
          maxLength={30}
          {...register('login', {
            required: {
              value: true,
              message: 'Логин – обязательное поле',
            },
            minLength: {
              value: 2,
              message: 'Логин слишком короткий',
            },
          })}
        />
        <div className={styles.signIn__container}>
          <input
            className={styles.signIn__input}
            type={isPasswordHidden ? 'password' : 'text'}
            placeholder='Введите пароль'
            // showPasswordButton={true}
            // validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
            // error={errors?.password?.message}
            maxLength={30}
            {...register('password', {
              required: {
                value: true,
                message: 'Пароль – обязательное поле',
              },
              minLength: {
                value: 2,
                message: 'Пароль слишком короткий',
              },
            })}
          />
          {/* <span className={styles.signIn__error}>Неверное имя и/или пароль</span> */}
          <span className={styles.signIn__error}>{errors?.login?.message || errors?.password?.message}</span>

          <button
            className={styles.signIn__showPassword}
            type='button'
            onClick={togglePassword}
            style={isPasswordHidden ? undefined : { backgroundImage: `url(${eye_opened})` }}
          />
        </div>
        <button
          className={styles.signIn__button}
          type='submit'
          disabled={!isDirty || !isValid}>
          Войти
        </button>
      </form>
    </main>
  );
}
