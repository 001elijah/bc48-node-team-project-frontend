import { BackdropHome } from 'components/BackdropHome/BackdropHome';
import { AuthWindows } from 'components/AuthWindows/AuthWindows';

const AuthPage = () => {
  return (
    <BackdropHome>
      <div className="container">
        <AuthWindows />
      </div>
    </BackdropHome>
  );
};

export default AuthPage;
