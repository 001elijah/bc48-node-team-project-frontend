import { useSelector } from 'react-redux';

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  // const token = useSelector(state => state.auth?.token);
  const isLoading = useSelector(state => state.auth?.isLoading);

  return (
    <>
      {isLoading && <Loader />}

      {/* {token && <Header />} */}
    </>
  );
};
