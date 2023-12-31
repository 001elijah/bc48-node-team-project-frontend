import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonAuth } from '../ButtonAuth/ButtonAuth';
import { validationSchemaRegister } from '../SchemaValidation/schemaValidation';
import { registerUser } from 'redux/Auth/authOperations';
import { AuthWithGoogle } from 'components/AuthWithGoogle/AuthWithGoogle';

import icons from '../../assets/icons/sprite.svg';
import y from '../LoginForm/Login.module.scss';

export const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchemaRegister,
    onSubmit: values => {
      dispatch(registerUser(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="userName">
        <input
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
          placeholder="Enter your name"
        />
        {formik.touched.userName && formik.errors.userName && (
          <p className={y.error}>{formik.errors.userName}</p>
        )}
      </label>
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
          placeholder="Create a password"
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
      <ButtonAuth title="Register Now" />
      <AuthWithGoogle></AuthWithGoogle>
    </form>
  );
};
