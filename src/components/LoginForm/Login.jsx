import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonAuth } from '../ButtonAuth/ButtonAuth';
import { validationSchemaLogin } from '../SchemaValidation/schemaValidation';
import { loginUser } from 'redux/Auth/authOperations';
import { AuthWithGoogle } from '../AuthWithGoogle/AuthWithGoogle';

import icons from '../../assets/icons/sprite.svg';
import y from './Login.module.scss';

export const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogin,
    onSubmit: values => {
      dispatch(loginUser(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Enter your email"
        />
        {formik.touched.email && formik.errors.email && (
          <p className={y.error}>{formik.errors.email}</p>
        )}
      </label>
      <label htmlFor="password">
        <input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Confirm a password"
        />
        <svg className={y.eye} onClick={toggleShowPassword}>
          <use
            href={showPassword ? `${icons}#icon-eye` : `${icons}#icon-antiEye`}
          ></use>
        </svg>
        {formik.touched.password && formik.errors.password && (
          <p className={y.error}>{formik.errors.password}</p>
        )}
      </label>
      <ButtonAuth title="Log In Now" />
      <AuthWithGoogle></AuthWithGoogle>
    </form>
  );
};
