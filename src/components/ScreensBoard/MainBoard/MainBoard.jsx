// import s from './MainBoard.module.scss';
import { Wrapper } from './MainBoard.styled';
// import PropTypes from 'prop-types';
import { HeaderDashBoard } from '../../HeaderDashBoard/HeaderDashBoard';
import { AddButton } from '../../ButtonAddColumn/ButtonAddColumn';
// import { useParams } from 'react-router-dom';

export const MainBoard = () => {
  // const { boardName } = useParams();
//робимо запит на бек за id дошки
  const url =
    'https://res.cloudinary.com/dg7gtqviy/image/upload/v1687337166/tb/x1/25_ygfh8n.jpg';
  return (
    <>
      <Wrapper
        // imgurl = {require('../../assets/images/desktop/11.png')}
        imgurl={url}
      >
        <HeaderDashBoard title="test" />

        <AddButton typeOfButton="Card" title="Add another column" />
      </Wrapper>
    </>
  );
};

// MainBoard.propTypes = {
//   boardtitle: PropTypes.string,
// };
