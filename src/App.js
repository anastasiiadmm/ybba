import {Route, Switch} from 'react-router-dom';

import Page404 from './Components/Page404/Page404.js';
import Login from './Containers/Login/Login';
import MainDashboard from './Containers/MainDashboard/MainDashboard.js';
import Registration from './Containers/Registration/Registration.js';
import PrivateRoute from './HOC/PrivatRoute/PrivatRoute.js';
import PasswordRecovery from './Containers/PasswordRecovery/PasswordRecovery';
import SetNewPassword from './Containers/SetNewPassword/SetNewPassword';
import Lesson from './Containers/Lesson/Lesson';
import ParentProfile from './Containers/ParentProfile/ParentProfile';
import ParentProfileEdit from './Containers/ParentProfileEdit/ParentProfileEdit';
import DevicesTestPage from './Containers/DevicesTestPage/DevicesTestPage';
import Lessons from './Containers/Lessons/Lessons';
import ParentTimeSlots from './Containers/ParentTimeSlots/ParentTimeSlots';

import './App.css';


const App = () => {
    return (
        <div>

            <Switch>
                <PrivateRoute path='/lessons/timeSlots/' exact component={ParentTimeSlots} />
                <PrivateRoute path='/lessons/' component={Lessons} exact />
                <PrivateRoute path='/profile/edit/' component={ParentProfileEdit} />
                <PrivateRoute path='/profile/' component={ParentProfile} exact/>
                <PrivateRoute path='/' component={MainDashboard} exact/>
                <PrivateRoute path='/lesson/:lessonId' component={Lesson} />
                <PrivateRoute path='/video-test/' component={DevicesTestPage} />
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
