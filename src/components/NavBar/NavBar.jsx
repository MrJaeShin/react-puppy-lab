import { Link } from "react-router-dom";

function NavBar({ user }) {
  return<nav>
    <Link to="/puppies">Puppies History</Link>
    &nbsp; | &nbsp;
    <Link to="/puppies/new">New Puppy</Link>
    &nbsp; | &nbsp;
    <span>
      <b>Welcom, {user.name}</b>
    </span>
  </nav>;
}

export default NavBar;
