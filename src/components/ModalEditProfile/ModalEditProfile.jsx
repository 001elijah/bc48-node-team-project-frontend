import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { resizeFile } from 'react-image-file-resizer';

import { ButtonAuth } from '../ButtonAuth/ButtonAuth';
import { validationSchemaRegister } from '../SchemaValidation/schemaValidation';
import { updateUser } from 'redux/Auth/authOperations';
import { selectorTheme } from 'redux/Auth/authSelectors';

import icons from '../../assets/icons/sprite.svg';
import s from './ModalEditProfile.module.scss';
import y from '../LoginForm/Login.module.scss';

export const ModalEditProfile = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  // eslint-disable-next-line
  const formData = new FormData();

  const name = useSelector(state => state.auth.userName);
  const email = useSelector(state => state.auth.email);
  const thema = useSelector(selectorTheme);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      userName: name,
      email: email,
      password: '',
      avatarUrl: null,
    },
    validationSchema: validationSchemaRegister,
    onSubmit: values => {
      console.log(values);
      dispatch(updateUser(values));
    },
  });

  //   const handleImageChange = event => {
  //     // formik.setFieldValue('image', event.currentTarget.files[0]);
  //    const file = event.currentTarget.files[0];
  //   formik.setFieldValue('image', file);
  //   setSelectedImage(URL.createObjectURL(file));
  //   };

  const handleImageChange = event => {
    console.log(event.currentTarget.files[0]);
    // setImageFile(event.currentTarget.files[0])
    const file = event.currentTarget.files[0];
    setImageFile(URL.createObjectURL(file));
  };
  //     const handleImageChange = async event => {
  //   const file = event.currentTarget.files[0];

  //         try {
  //       console.log("gogogo")
  //     const resizedFile = await resizeFile(file, 300, 300, 'PNG', 80);
  //     formik.setFieldValue('image', resizedFile);
  //     setSelectedImage(URL.createObjectURL(resizedFile));
  //   } catch (error) {
  //     console.log('Ошибка при изменении размера изображения:', error);
  //   }
  // };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="image" className={s.wrapImage}>
        <div>
          {imageFile ? (
            <img src={imageFile} alt="Selected Avatar" className={s.image} />
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
        {/* {imageFile && <img src={imageFile} alt="Selected Avatar" />} */}
        <input
          className={s.isHidden}
          id="image"
          name="image"
          type="file"
          onChange={handleImageChange}
        />
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
        <svg className={y.eye} onClick={toggleShowPassword}>
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
