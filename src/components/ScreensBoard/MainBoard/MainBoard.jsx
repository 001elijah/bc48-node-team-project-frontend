// import s from './MainBoard.module.scss';
import { Wrapper } from './MainBoard.styled';
import PropTypes from 'prop-types';
import { HeaderDashBoard } from '../../HeaderDashBoard/HeaderDashBoard';
import { AddButton } from '../../ButtonAddColumn/ButtonAddColumn';

const BASE_URL_IMG = 'https://res.cloudinary.com/dblzpxfzb/image/upload/v1687449642/background/'
// import { useParams } from 'react-router-dom';

export const MainBoard = ({imgid}) => {
  // const { boardName } = useParams();
//робимо запит на бек за id дошки

  return (
    <>
      <Wrapper
        imgurl={BASE_URL_IMG}
        imgid = {imgid}
      >
        <HeaderDashBoard title="test" />

        <AddButton typeOfButton="Card" title="Add another column" />
      </Wrapper>
    </>
  );
};

MainBoard.propTypes = {
  imgid: PropTypes.string,
};
