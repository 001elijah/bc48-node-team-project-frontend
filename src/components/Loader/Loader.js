import clsx from 'clsx';
import s from './Loader.module.scss';

export const Loader = () => {
  const triInvert = clsx(s.tri, s.invert);
  return (
    <div className={s.triangles}>
      <div className={triInvert}></div>
      <div className={triInvert}></div>
      <div className={s.tri}></div>
      <div className={triInvert}></div>
      <div className={triInvert}></div>
      <div className={s.tri}></div>
      <div className={triInvert}></div>
      <div className={s.tri}></div>
      <div className={triInvert}></div>
    </div>
  );
};
