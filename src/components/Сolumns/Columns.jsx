import { ColumnItem } from './ColumItem';
import { arrays } from './data';
import s from "./Columns.module.scss"

export const Columns = () => {

  return (
    <>
    <div className={s.Wrapper}>
      {arrays.map(item => (
        <ColumnItem 
        key={item.id}
        title={item.name}             
        />
      ))}
      </div>
    </>
  );
};
