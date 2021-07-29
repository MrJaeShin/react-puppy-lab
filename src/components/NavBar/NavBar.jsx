import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    usersService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/puppies">All Puppies</Link>
      &nbsp; | &nbsp;
      <Link to="/puppies/new">New Puppy</Link>
      &nbsp; | &nbsp;
      <span>
        <b>Welcom, {user.name}</b>
      </span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavBar;
