import {Route, Switch} from "react-router-dom";
import './App.css';
import Login from "./Containers/Login/Login";
import Logout from "./Containers/Logout/Logout.js";
import PrivateRoute from "./HOC/PrivatRoute/PrivatRoute.js";

const App = () => {
    return (
        <div>

            <Switch>
                <PrivateRoute path='/' component={Logout} exact/>
                <Route path='/login' component={Login}/>
            </Switch>

        </div>
    );
}

export default App;
