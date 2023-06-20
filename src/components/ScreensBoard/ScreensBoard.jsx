import s from './ScreensBoard.module.scss';
import { Wrapper } from './ScreensBoard.styled';
import PropTypes from 'prop-types';
import {HeaderDashBoard} from '../HeaderDashBoard/HeaderDashBoard';
import {AddButton} from '../ButtonAddColumn/ButtonAddColumn'

export const Board = ({ boardtitle }) => {
  
  return (
    <>
    <Wrapper 
        imgurl = {require('../../assets/images/desktop/11.png')}>

      <HeaderDashBoard 
        title = {boardtitle}
      />
      {!boardtitle && (
        <p className={s.DefaultTitle}>
          Before starting your project, it is essential 
          <span className={s.DefaultLink}> to create a board </span>to visualize
          and track all the necessary tasks and milestones. This board serves as
          a powerful tool to organize the workflow and ensure effective
          collaboration among team members.
        </p>
      )}
      {boardtitle&&(
      <AddButton
        typeOfButton = 'Card'
        title = 'Add another column'
      />
      )}
      </Wrapper>
    </>
  );
};

Board.propTypes = {
  boardtitle: PropTypes.string,
};