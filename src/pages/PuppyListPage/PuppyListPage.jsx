import * as userService from '../../utilities/users-service';
import PuppyList from '../../components/PuppyList/PuppyList';
import './PuppyListPage.css';


function PuppiesPage({puppies, setPuppies}) {
    async function handleCheckToken() {
        const expDate = await userService.checkToken();
        console.log(expDate);
    }
    

    return (
        <div className="PuppyListPage-grid">
            <h1>Puppies Page</h1>
            <PuppyList puppies={puppies}/>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )
}

export default PuppiesPage
