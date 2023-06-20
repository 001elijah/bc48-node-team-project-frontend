import s from './Modal.module.scss';
import {ImgWrap} from './ImgWrap';

export const BackgroundBlock = () => {
  return (
    <>
      <div className={s.BackgroundBlock}>
        <p className={s.Title}>Background</p>
        <div className={s.ImgBlock}>
          <ImgWrap type="x1" image="10.png" />
          <ImgWrap type="x1" image="11.png" />
          <ImgWrap type="x1" image="12.png" />
          <ImgWrap type="x1" image="13.png" />
          <ImgWrap type="x1" image="14.png" />
          <ImgWrap type="x1" image="15.png" />
          <ImgWrap type="x1" image="16.png" />
          <ImgWrap type="x1" image="17.png" />
          <ImgWrap type="x1" image="18.png" />
          <ImgWrap type="x1" image="19.png" />
          <ImgWrap type="x1" image="20.png" />
          <ImgWrap type="x1" image="21.png" />
          <ImgWrap type="x1" image="22.png" />
          <ImgWrap type="x1" image="23.png" />
          <ImgWrap type="x1" image="24.png" />
          <ImgWrap type="x1" image="25.png" />          
        </div>
      </div>
    </>
  );
};