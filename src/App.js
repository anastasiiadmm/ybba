import {Route, Switch} from "react-router-dom";
import './App.css';
import Login from "./Containers/Login/Login";
import MainDashboard from "./Containers/MainDashboard/MainDashboard.js";
import Registration from "./Containers/Registration/Registration.js";
import PrivateRoute from "./HOC/PrivatRoute/PrivatRoute.js";

const App = () => {
    return (
        <div>

            <Switch>
                <PrivateRoute path='/' component={MainDashboard} exact/>
                <Route path='/login/' component={Login}/>
                <Route path='/registration/:stage/' component={Registration}/>
            </Switch>

        </div>
    );
}

export default App;
