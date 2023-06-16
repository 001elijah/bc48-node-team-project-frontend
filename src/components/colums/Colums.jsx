import { HeaderOfColums } from './HeadeerOfColumn';
import { Card } from 'components/cards/Cards';

const column = data => {
  return (
    <>
      <HeaderOfColums />
      {data.map(item => {
        <Card />;
      })}
    </>
  );
};
