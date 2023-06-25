import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { ButtonAuth } from '../ButtonAuth/ButtonAuth';
import { validationSchemaEditProfile } from '../SchemaValidation/schemaValidation';
import { updateUser } from 'redux/Auth/authOperations';
import {
  selectorTheme,
  selectorUserName,
  selectorAvatarURL,
  selectorEmail,
} from 'redux/Auth/authSelectors';

import icons from '../../assets/icons/sprite.svg';
import s from './ModalEditProfile.module.scss';
import y from '../LoginForm/Login.module.scss';

export const ModalEditProfile = ({ onClose }) => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const name = useSelector(selectorUserName);
  const email = useSelector(selectorEmail);
  const thema = useSelector(selectorTheme);
  const avatar = useSelector(selectorAvatarURL);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      userName: name,
      email: email,
      password: '',
      avatarUrl: '',
    },
    validationSchema: validationSchemaEditProfile,
    onSubmit: values => {
      onClose();

      const formData = new FormData();

      formData.append('userName', values.userName);
      formData.append('email', values.email);
      formData.append('password', values.password);
      formData.append('avatarUrl', imageFile);

      dispatch(updateUser(formData));
    },
  });

  const handleImageChange = event => {
    setImageFile(event.currentTarget.files[0]);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="avatarUrl" className={s.wrapImage}>
        <div>
          {imageFile ? (
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Selected Avatar"
              className={s.image}
            />
          ) : avatar ? (
            <img src={avatar} alt="Avatar" className={s.image} />
          ) : (
            <svg className={s.avatar}>
              <use href={`${icons}#icon-user-${thema || 'light'}`}></use>
            </svg>
          )}
        </div>
        {/* <svg className={s.avatar}>
        </svg> */}
        <div className={`${s.buttonPlus} ${s[thema]}`}>
          +
          {/* <svg className={s.buttonPlus}>
            
          <use href={`${icons}#icon-plus`}></use>
        </svg> */}
        </div>
        <input
          className={s.isHidden}
          id="avatarUrl"
          name="avatarUrl"
          type="file"
          onChange={handleImageChange}
        />
        {formik.touched.avatarUrl && formik.errors.avatarUrl && (
          <p className={y.error}>{formik.errors.avatarUrl}</p>
        )}
      </label>

      <label className={s.label} htmlFor="userName">
        <input
          className={`${s.input} ${s[thema]}`}
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
      <label className={s.label} htmlFor="email">
        <input
          className={`${s.input} ${s[thema]}`}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder={email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className={y.error}>{formik.errors.email}</p>
        )}
      </label>
      <label className={s.label} htmlFor="password">
        <input
          className={`${s.input} ${s[thema]}`}
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
        <svg className={`${s.eye} ${s[thema]}`} onClick={toggleShowPassword}>
          <use
            href={showPassword ? `${icons}#icon-eye` : `${icons}#icon-antiEye`}
          ></use>
        </svg>
        {formik.touched.password && formik.errors.password && (
          <p className={y.error}>{formik.errors.password}</p>
        )}
      </label>
      <ButtonAuth title="Send" />
    </form>
  );
};

ModalEditProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
};
