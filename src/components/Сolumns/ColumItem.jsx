import { HeaderOfColums } from './HeadeerOfColumn';
import { Card } from 'components/Cards/Cards';
import s from './Columns.module.scss';
import PropTypes from 'prop-types';
import { arrcard } from './data';

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
      </div>
    </>
  );
};

ColumnItem.propTypes = {
  title: PropTypes.string,
};
