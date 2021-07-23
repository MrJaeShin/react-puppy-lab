import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NewPuppyPage from "../NewPuppyPage/NewPuppyPage";
import PuppyHistoryPage from "../PuppyHistoryPage/PuppyHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Switch>
            <Route path="/puppies/new">
              <NewPuppyPage />
            </Route>
            <Route path="/puppies">
              <PuppyHistoryPage />
            </Route>
            <Redirect to="/puppies" />
          </Switch>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
