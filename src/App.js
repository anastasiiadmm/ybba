import {Route, Switch} from 'react-router-dom';

import Page404 from './Components/Page404/Page404.js';
import Login from './Containers/Login/Login';
import MainDashboard from './Containers/MainDashboard/MainDashboard.js';
import Registration from './Containers/Registration/Registration.js';
import PrivateRoute from './HOC/PrivatRoute/PrivatRoute.js';
import PasswordRecovery from './Containers/PasswordRecovery/PasswordRecovery';
import SetNewPassword from './Containers/SetNewPassword/SetNewPassword';

import './App.css';


const App = () => {
    return (
        <div>

            <Switch>
                <PrivateRoute path='/' component={MainDashboard} exact/>
                <Route path='/login/' component={Login}/>
                <Route path='/registration/:stage/' component={Registration}/>
                <Route path='/reset-password/' component={PasswordRecovery} exact />
                <Route path='/reset-password/:token' component={SetNewPassword} exact />
                <Route component={Page404}/>
            </Switch>

        </div>
    );
}

export default App;
