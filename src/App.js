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
import ParentTimeSlots from 'Containers/ParentTimeSlots/ParentTimeSlots';
import ChildProfile from 'Containers/ChildProfile/ChildProfile';
import ChildProfiles from 'Containers/ChildProfiles/ChildProfiles';
import Registration from 'Containers/Registration/Registration.js';
import RegistrationSuccess from 'Containers/RegistrationSuccess/RegistrationSuccess.js';
import PageSuccess from 'Components/PagesForPayment/PageSuccess';
import PageFail from 'Components/PagesForPayment/PageFail';
import ParentQuestionnaire from 'Containers/ParentQuestionnaire/ParentQuestionnaire.js';
import EditSurveys from 'Containers/Surveys/EditSurveys/EditSurveys.js';
import ChildSpeechCard from 'Containers/ChildSpeechCard/ChildSpeechCard.js';

import MainAdminDashboard from 'Containers/MainAdminDashboard/MainAdminDashboard';
import ChildList from 'Containers/MainAdminDashboard/NavigatorMenu/ChildList/ChildList';
import UsersList from 'Containers/MainAdminDashboard/NavigatorMenu/UsersList/UsersList';
import ProfilesList from 'Containers/MainAdminDashboard/NavigatorMenu/ProfilesList/ProfilesList';
import TokensRegistrationList from 'Containers/MainAdminDashboard/NavigatorMenu/TokensRegistrationList/TokensRegistrationList';

import 'App.css';



const App = () => {

    return (
        <BrowserRouter basename='/platform'>
            <ToastContainer
                position='top-right'
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
                <PrivateRoute path='/child-profile/' component={ChildProfiles} exact/>
                <PrivateRoute path='/child-profile/:childId/:stage/' component={ChildProfile} exact />
                <PrivateRoute path='/lessons/:lessonId/timeSlots/' exact component={ParentTimeSlots}/>
                <PrivateRoute path='/timetable-schedule/' component={ParentTimeTableSchedule}/>
                {/*<PrivateRoute path='/lessons/' component={Lessons} exact />*/}
                <PrivateRoute path='/profile/edit/' component={ParentProfileEdit}/>
                <PrivateRoute path='/profile/' component={ParentProfile} exact/>
                <PrivateRoute path='/' component={MainDashboard} exact/>
                <PrivateRoute path='/lessons/:lessonId' component={Lesson}/>
                <PrivateRoute path='/video-test/' component={DevicesTestPage}/>
                <PrivateRoute path='/questionnaire/:childId/' component={ParentQuestionnaire}/>
                <PrivateRoute path='/children/:childId/surveys/edit/' component={EditSurveys} />
                <PrivateRoute path='/children/:childId/surveys/speech-card/' component={ChildSpeechCard} />

                <PrivateRoute path='/admin-dashboard/' component={MainAdminDashboard} exact/>
                <PrivateRoute path='/admin/account/child/' component={ChildList} exact/>
                <PrivateRoute path='/admin/account/user/' component={UsersList} exact/>
                <PrivateRoute path='/admin/account/profile/' component={ProfilesList} exact/>
                <PrivateRoute path='/admin/account/profile/' component={ProfilesList} exact/>
                <PrivateRoute path='/admin/account/registrationtoken/' component={TokensRegistrationList}/>

                <Route path='/login/' component={Login}/>
                <Route path='/registration/:registrationKey' component={Registration}/>
                <Route path='/registration-success/' component={RegistrationSuccess}/>
                <Route path='/reset-password/' component={PasswordRecovery} exact/>
                <Route path='/reset-password/:token' component={SetNewPassword} exact/>
                <Route path='/payment-success/' component={PageSuccess} exact/>
                <Route path='/payment-fail/' component={PageFail} exact/>
                <Route component={Page404}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
