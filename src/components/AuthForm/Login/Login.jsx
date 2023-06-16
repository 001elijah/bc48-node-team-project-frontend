import { useFormik } from 'formik';

import { ButtonAuth } from '../ButtonAuth/ButtonAuth';
import { validationSchemaLogin } from '../schemaValidation';

import y from './Login.module.scss';

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogin,
    onSubmit: values => {
      console.log(values);
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
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Confirm a password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className={y.error}>{formik.errors.password}</p>
        )}
      </label>
      <ButtonAuth title="Log In Now" />
    </form>
  );
};
