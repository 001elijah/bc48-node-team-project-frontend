// import { Modal } from "components/Modal/Modal";
// import { useState } from "react";
// import PropTypes from 'prop-types';

// export const ModalEditProfile = ({ closeModal }) => {
//   return (
//       <>

//     </>
//   );
// }

// ModalEditProfile.propTypes = {
//   closeModal: PropTypes.func.isRequired
// };

import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resizeFile } from 'react-image-file-resizer';

import { ButtonAuth } from '../ButtonAuth/ButtonAuth';
import { validationSchemaRegister } from '../SchemaValidation/schemaValidation';
import { updateUser } from 'redux/Auth/authOperations';

import icons from '../../assets/icons/sprite.svg';
import y from '../LoginForm/Login.module.scss';

export const ModalEditProfile = () => {
    const dispatch = useDispatch();
    
    const [showPassword, setShowPassword] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    const formData = new FormData()

  const name = useSelector(state => state.auth.userName);
  const email = useSelector(state => state.auth.email);

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
        console.log(event.currentTarget.files[0])
        // setImageFile(event.currentTarget.files[0])
       const file = event.currentTarget.files[0];
            setImageFile(URL.createObjectURL(file))
    }
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
      <label htmlFor="image">
        +++
        <input
          id="image"
          name="image"
          type="file"
          onChange={handleImageChange}
              />
              
              {imageFile && (
  <img src={imageFile} alt="Selected Avatar" />
)}
          </label>
          
      <label htmlFor="name">
        <input
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder={name}
        />
        {formik.touched.name && formik.errors.name && (
          <p className={y.error}>{formik.errors.name}</p>
        )}
      </label>
      <label htmlFor="email">
        <input
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
      <ButtonAuth title="Send" />
    </form>
  );
};
