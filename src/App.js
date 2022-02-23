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
import ExaminationProtocolList from 'Containers/MainAdminDashboard/NavigatorMenu/ExaminationProtocolList/ExaminationProtocolList';
import SpeechCardList from 'Containers/MainAdminDashboard/NavigatorMenu/SpeechCardList/SpeechCardList';
import GamesList from 'Containers/MainAdminDashboard/NavigatorMenu/GamesList/GamesList';
import GameTypeList from 'Containers/MainAdminDashboard/NavigatorMenu/GameTypeList/GameTypeList';
import LessonsTimeSlotsList from 'Containers/MainAdminDashboard/NavigatorMenu/LessonsTimeSlotsList/LessonsTimeSlotsList';
import AdminLessonTimeSlot from 'Containers/MainAdminDashboard/NavigatorMenu/AdminLessonTimeSlot/AdminLessonTimeSlot';
import ChildListAdd from 'Containers/MainAdminDashboard/NavigatorMenu/ChildList/ChildListAdd';
import UsersListAdd from 'Containers/MainAdminDashboard/NavigatorMenu/UsersList/UsersListAdd';
import ProfilesListAdd from 'Containers/MainAdminDashboard/NavigatorMenu/ProfilesList/ProfilesListAdd';
import TokensRegistrationListAdd from 'Containers/MainAdminDashboard/NavigatorMenu/TokensRegistrationList/TokensRegistrationListAdd';
import ExaminationProtocolListAdd from 'Containers/MainAdminDashboard/NavigatorMenu/ExaminationProtocolList/ExaminationProtocolListAdd';
import SpeechCardListAdd from 'Containers/MainAdminDashboard/NavigatorMenu/SpeechCardList/SpeechCardListAdd';
import GamesListAdd from 'Containers/MainAdminDashboard/NavigatorMenu/GamesList/GamesListAdd';
import GameTypeListAdd from 'Containers/MainAdminDashboard/NavigatorMenu/GameTypeList/GameTypeListAdd';
import LessonsTimeSlotsListAdd from 'Containers/MainAdminDashboard/NavigatorMenu/LessonsTimeSlotsList/LessonsTimeSlotsListAdd';
import AdminLessonTimeSlotAdd from 'Containers/MainAdminDashboard/NavigatorMenu/AdminLessonTimeSlot/AdminLessonTimeSlotAdd';

import 'App.css';
import LocalizationButton from './Containers/LocalizationButton/LocalizationButton';


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
            <LocalizationButton />
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
                <PrivateRoute path='/admin/account/child/add/' component={ChildListAdd} exact/>
                <PrivateRoute path='/admin/account/user/' component={UsersList} exact/>
                <PrivateRoute path='/admin/account/user/add/' component={UsersListAdd} exact/>
                <PrivateRoute path='/admin/account/profile/' component={ProfilesList} exact/>
                <PrivateRoute path='/admin/account/profile/add/' component={ProfilesListAdd} exact/>
                <PrivateRoute path='/admin/account/registrationtoken/' component={TokensRegistrationList} exact/>
                <PrivateRoute path='/admin/account/registrationtoken/add/' component={TokensRegistrationListAdd} exact/>
                <PrivateRoute path='/admin/survey/examinationprotocol/' component={ExaminationProtocolList} exact/>
                <PrivateRoute path='/admin/survey/examinationprotocol/add/' component={ExaminationProtocolListAdd} exact/>
                <PrivateRoute path='/admin/survey/speechcard/' component={SpeechCardList} exact/>
                <PrivateRoute path='/admin/survey/speechcard/add/' component={SpeechCardListAdd} exact/>
                <PrivateRoute path='/admin/game/' component={GamesList} exact/>
                <PrivateRoute path='/admin/game/add' component={GamesListAdd} exact/>
                <PrivateRoute path='/admin/gametype/' component={GameTypeList} exact/>
                <PrivateRoute path='/admin/gametype/add' component={GameTypeListAdd} exact/>
                <PrivateRoute path='/admin/lesson/timeslot/' component={LessonsTimeSlotsList} exact/>
                <PrivateRoute path='/admin/lesson/timeslot/add' component={LessonsTimeSlotsListAdd} exact/>
                <PrivateRoute path='/admin/lesson/' component={AdminLessonTimeSlot} exact/>
                <PrivateRoute path='/admin/lesson/add' component={AdminLessonTimeSlotAdd} exact/>

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
