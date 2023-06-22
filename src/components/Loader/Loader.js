import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectorIsLoading } from 'redux/Loader/loaderSelectors';
import { selectorTheme } from 'redux/Auth/authSelectors';
import s from './Loader.module.scss';

export const Loader = () => {
  const isLoading = useSelector(selectorIsLoading);
  const theme = useSelector(selectorTheme);
  return (
    isLoading && (
      <div className={s.triangles}>
        <div className={clsx(s.tri, s.invert, s[theme])}></div>
        <div className={clsx(s.tri, s.invert, s[theme])}></div>
        <div className={clsx(s.tri, s[theme])}></div>
        <div className={clsx(s.tri, s.invert, s[theme])}></div>
        <div className={clsx(s.tri, s.invert, s[theme])}></div>
        <div className={clsx(s.tri, s[theme])}></div>
        <div className={clsx(s.tri, s.invert, s[theme])}></div>
        <div className={clsx(s.tri, s[theme])}></div>
        <div className={clsx(s.tri, s.invert, s[theme])}></div>
      </div>
    )
  );
};
