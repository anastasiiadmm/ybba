import React, {useState} from 'react';
import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import {ChildProfileContext} from '../../context/ChildProfileContext/ChildProfileContext';
import {Link} from 'react-router-dom';
import {addClasses} from '../../utils/addClasses/addClasses';
import Button from '../../Components/Button/Button';
import ChildProfileStageThree from './stages/ChildProfileStageThree';
import ChildProfileStageTwo from './stages/ChildProfileStageTwo';

const ChildProfile = (props) => {

    const childInitialData = {
        child_does_not_speak_or_speaks_poorly: false,
        put_the_sound_p: false,
        put_the_sound_l: false,
        put_sizzling: false,
        put_other_sounds: false,
        speech_therapy_massage_required: false,
        stuttering_correction: false,
        speech_development_delay_correction: false,
        correction_of_mental_retardation: false,
        help_other_text: '',
    }

    const [childAdditionalData, setChildAdditionalData] = useState(childInitialData)

    const checkboxChangeHandler = e => {
        setChildAdditionalData({...childAdditionalData, [e.target.name]: e.target.checked})
    };
    const textInputChangeHandler = e => {
        setChildAdditionalData({...childAdditionalData, [e.target.name]: e.target.value})
    };

    const childProfileContextData = {
        checkboxChangeHandler,
        textInputChangeHandler,
        childAdditionalData,
        setChildAdditionalData
    };

    const {stage} = props.match.params

    const stages = {
        '2': {
            component: <ChildProfileStageTwo/>,
            isFilled: (
                childAdditionalData.child_does_not_speak_or_speaks_poorly ||
                childAdditionalData.put_the_sound_p ||
                childAdditionalData.put_the_sound_l ||
                childAdditionalData.put_sizzling ||
                childAdditionalData.put_other_sounds ||
                childAdditionalData.speech_therapy_massage_required ||
                childAdditionalData.stuttering_correction ||
                childAdditionalData.speech_development_delay_correction ||
                childAdditionalData.correction_of_mental_retardation ||
                childAdditionalData.help_other_text
            ),
        },
        '3': {
            component: <ChildProfileStageThree/>,
            isFilled: false,
        },
        '4': {
            component: <h3>Stage 4</h3>,
            isFilled: false,
        }
    }
    const currentStage = stages[stage]

    const stagesLinks = [
        'Основная информация ребенка',
        'С чем вам помочь?',
        'Был ли у вас опыт работы с другими специалистами?',
        'Как вы о нас узнали?',
    ]

    return (
        <SidebarContainer>
            <ChildProfileContext.Provider value={childProfileContextData}>
                <div className='main__inner'>
                    <div className='main__title-block'>
                        <h1 className='main__title'>С чем вам помочь?</h1>
                    </div>
                    <div className='content'>
                        <div className='content__inner'>

                            <form action='#'>

                                <div className='profile-child'>
                                    <div className='profile-child__links'>
                                        {stagesLinks.map((stageLink, index) => {
                                            const stageOfLink = index + 1
                                            return (
                                                <Link
                                                    to={`/child-profile/${stageOfLink}/`}
                                                    className={addClasses('profile-child__link', {
                                                        'write-in': parseInt(stage) > stageOfLink
                                                    })}
                                                    key={index}
                                                >
                                                    {stageLink}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                    <div className='profile-child__survey'>
                                        {currentStage?.component}
                                    </div>
                                </div>
                                <div className='content__bottom'>
                                    <Button
                                        className='btn btn_light'
                                        to='/'
                                    >
                                        Отмена
                                    </Button>
                                    <Button
                                        className={addClasses('btn', {
                                            'disabled': !currentStage?.isFilled
                                        })}
                                        to={`/child-profile/${parseInt(stage) + 1}`}
                                    >
                                        Сохранить
                                    </Button>
                                </div>
                            </form>
                            <div/>
                        </div>
                    </div>
                </div>
            </ChildProfileContext.Provider>
        </SidebarContainer>
    );
}

export default ChildProfile;