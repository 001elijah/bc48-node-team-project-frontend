import * as yup from 'yup';

export const validationSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email address. Example: a@a.ua',
    )
    .required('Email required'),
  password: yup
    .string()
    .matches(/^\S*$/, 'Must not contain spaces')
    .matches(
      /^[a-zA-Z0-9!"@#$%^&*()]+$/,
      'Can only contain Latin letters, numbers, and signs',
    )
    .min(8, 'Minimum length 8 characters')
    .max(64, 'Maximum length 64 characters')
    .required('Password required'),
});

export const validationSchemaRegister = yup.object().shape({
  userName: yup
    .string()
    .matches(
    /^[a-zA-Z0-9]+([-_ ][a-zA-Z0-9]+)*$/,
    // 'Only letters, numbers, underscores, spaces, hyphens, and dashes are allowed between words',
      'Invalid name'
  )
    .min(2, 'Minimum length 2 characters')
    .max(32, 'Maximum length 32 characters')
    .required('Name required'),
  email: yup
    .string()
    .matches(
      /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email address. Example: a@a.ua',
    )
    .required('Email required'),
  password: yup
    .string()
    .matches(/^\S*$/, 'Must not contain spaces')
    .matches(
      /^[a-zA-Z0-9!"@#$%^&*()]+$/,
      'Can only contain Latin letters, numbers, and signs',
    )
    .min(8, 'Minimum length 8 characters')
    .max(64, 'Maximum length 64 characters')
    .required('Password required'),
});