import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';
import { Header } from 'components/Header/Header';

export const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <button onClick={() => dispatch(logoutUser())}>Log logOut</button>
    </div>
  );
};
