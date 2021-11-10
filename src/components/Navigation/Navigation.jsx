import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink exact to="/" className="link">
        Home
      </NavLink>
      {/* {isLoggedIn && ( */}
      <NavLink to="/todos" className="link">
        Todos
      </NavLink>
      {/* )} */}
    </nav>
  );
};

export default Navigation;
