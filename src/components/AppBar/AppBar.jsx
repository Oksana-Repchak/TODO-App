import Navigation from '../Navigation/Navigation';
// import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import './AppBar.scss';

const AppBar = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className="header">
      <Navigation />
      {/* {isLoggedIn ? */}
      {/* <UserMenu /> */}
      <AuthNav />
    </header>
  );
};

export default AppBar;
