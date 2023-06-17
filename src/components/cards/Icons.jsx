import svg from '../../assets/icons/sprite.svg';
import s  from './Cards.module.scss'

const IconSvg = (letter,  func) => {
  return(
    <svg className={s.IconsStyle}  width='16' height='16' onClick={func}>
      <use href={`${svg}#icon-${letter}`} />
    </svg>
  )
}


  export default IconSvg