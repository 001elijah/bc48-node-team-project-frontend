import s from './Sidebar.module.scss';
import clsx from 'clsx';
import Logo from './Logo/Logo';
import NewBoardButton from './BoardList/NewBoardButton';
import BoardList from './BoardList/BoardList';
import HelpWindow from './HelpWindow/HelpWindow';
import Logout from './Logout/Logout';

const Sidebar = () => {
  const theme = 'colorful'; // change theme between dark, light and colorful to see how it works
  return (
    <div className={clsx(s.container, s[theme])}>
      <Logo theme={theme} />
      <p className={clsx(s.text, s[theme])}>My boards</p>
      <NewBoardButton theme={theme} />
      <BoardList theme={theme} />
      <HelpWindow theme={theme} />
      <Logout theme={theme} />
    </div>
  );
};

export default Sidebar;
