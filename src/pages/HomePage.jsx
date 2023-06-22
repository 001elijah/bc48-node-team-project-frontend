import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';
import { Header } from 'components/Header/Header';
import { Board } from 'components/ScreensBoard/ScreensBoard';

export const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />

      <Board boardtitle="" />

      <button onClick={() => dispatch(logoutUser())}>Log logOut</button>
    </div>
  );
};
