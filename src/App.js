import {NavLink, Route, Switch} from "react-router-dom";
import './App.css';
import Login from "./Containers/Login/Login";

const App = () => {
    return (
        <div>

            <Switch>
                <Route path='/' render={() => (
                    <NavLink to='/login/'>
                        Login
                    </NavLink>
                )} exact/>
                <Route path='/login' component={Login}/>
            </Switch>

        </div>
    );
}

export default App;
