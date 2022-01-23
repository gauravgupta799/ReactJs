import './App.css';
import Navbar from './Components/Navbar';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import Codewithfun from './Components/Codewithfun';
import Error from './Components/Error';
import EditUser from "./Components/EditUser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Codewithfun}></Route>
          <Route path="/all" exact component={AllUsers}></Route>
          <Route path="/add" exact component={AddUser}></Route>
          <Route exact path="/edit/:id" component={EditUser} />
          <Route component={Error}></Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
