import * as userService from "../../utilities/users-service";
import PuppyList from "../../components/PuppyList/PuppyList";

function PuppiesPage({ puppies, setPuppies, handleDeletePuppy }) {
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <div className="puppies-page">
      <h1>Puppies Page</h1>
      <PuppyList puppies={puppies} handleDeletePuppy={handleDeletePuppy} />
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}

export default PuppiesPage;
