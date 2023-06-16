import svg from '../../assets/icons/sprite.svg';

const iconSvg = (letter,  func) => (
    <svg stroke='#FFFFFF50' width='16' height='16' onClick={func}>
      <use href={`${svg}#icon-${letter}`} />
    </svg>
  );


  export default iconSvg