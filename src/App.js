import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Page404 from 'Components/Page404/Page404.js';
import Login from 'Containers/Login/Login';
import MainDashboard from 'Containers/MainDashboard/MainDashboard.js';
import PrivateRoute from 'HOC/PrivatRoute/PrivatRoute.js';
import PasswordRecovery from 'Containers/PasswordRecovery/PasswordRecovery';
import SetNewPassword from 'Containers/SetNewPassword/SetNewPassword';
import Lesson from 'Containers/Lesson/Lesson';
import ParentProfile from 'Containers/ParentProfile/ParentProfile';
import ParentTimeTableSchedule from 'Containers/ParentTimeTableSchedule/ParentTimeTableSchedule';
import ParentProfileEdit from 'Containers/ParentProfileEdit/ParentProfileEdit';
import DevicesTestPage from 'Containers/DevicesTestPage/DevicesTestPage';
import Lessons from 'Containers/Lessons/Lessons';
import ParentTimeSlots from 'Containers/ParentTimeSlots/ParentTimeSlots';
import ChildProfile from 'Containers/ChildProfile/ChildProfile';
import ChildProfiles from 'Containers/ChildProfiles/ChildProfiles';
import Registration from 'Containers/Registration/Registration.js';

import 'App.css';
import RegistrationSuccess from 'Containers/RegistrationSuccess/RegistrationSuccess.js';

const App = () => {
  return (
    <BrowserRouter basename="/platform">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        {/*<PrivateRoute path='/payments/' component={Payments} />*/}
        <PrivateRoute path="/child-profile/" component={ChildProfiles} exact />
        <PrivateRoute
          path="/child-profile/:childId/:stage/"
          component={ChildProfile}
          exact
        />
        <PrivateRoute
          path="/lessons/:lessonId/timeSlots/"
          exact
          component={ParentTimeSlots}
        />
        <PrivateRoute
          path="/timetable-schedule/"
          component={ParentTimeTableSchedule}
        />
        <PrivateRoute path="/lessons/" component={Lessons} exact />
        <PrivateRoute path="/profile/edit/" component={ParentProfileEdit} />
        <PrivateRoute path="/profile/" component={ParentProfile} exact />
        <PrivateRoute path="/" component={MainDashboard} exact />
        <PrivateRoute path="/lessons/:lessonId" component={Lesson} />
        <PrivateRoute path="/video-test/" component={DevicesTestPage} />
        <Route path="/login/" component={Login} />
        <Route path="/registration/" component={Registration} />
        <Route path="/registration-success/" component={RegistrationSuccess} />
        <Route path="/reset-password/" component={PasswordRecovery} exact />
        <Route path="/reset-password/:token" component={SetNewPassword} exact />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
