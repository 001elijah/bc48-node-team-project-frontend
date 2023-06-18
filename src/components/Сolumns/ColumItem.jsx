import { HeaderOfColums } from './HeadeerOfColumn';
import { Card } from 'components/Cards/Cards';
import s from './Columns.module.scss';
import PropTypes from 'prop-types';
import { arrcard } from './data';
import {AddButton} from '../Button/AddButton'

export const ColumnItem = ({ title }) => {


  return (
    <>
      <div className={s.ColumnBlock}>
        <HeaderOfColums 
        title={title} 
        />
        <div className={s.CardsBlock}>
       {arrcard.map(item=>(
        <Card 
          key={item.id}
          title ={item.title}
          desc = {item.desc}
          status={item.status}
          deadline= {item.deadline}
        />
       ))}
       </div>
       <AddButton 
        title={"Add another card"}
        stroke= {'#ffffff'}
       />
      </div>
    </>
  );
};

ColumnItem.propTypes = {
  title: PropTypes.string,
};
