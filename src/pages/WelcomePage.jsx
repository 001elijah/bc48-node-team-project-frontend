import { BackdropHome } from 'components/BackdropHome/BackdropHome';
import { WelcomeWindows } from 'components/WelcomeWindows/WelcomeWindows';

const WelcomePage = () => {
  return (
    <BackdropHome>
      <WelcomeWindows />
    </BackdropHome>
  );
};

export default WelcomePage;
