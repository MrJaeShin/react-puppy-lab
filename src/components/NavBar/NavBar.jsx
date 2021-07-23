import { Link } from "react-router-dom";

function NavBar() {
  return<nav>
    <Link to="/puppies">Puppies History</Link>
    &nbsp; | &nbsp;
    <Link to="/puppies/new">New Puppy</Link>
  </nav>;
}

export default NavBar;
