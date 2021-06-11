import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import TBHome from "./components/TBhome";
import TBNavbar from "./components/TBnavbar";

function App() {

  return (
      <div className="container-fluid">
        <TBNavbar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={TBHome} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
