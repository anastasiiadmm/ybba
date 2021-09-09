import React, {useState} from 'react';

import Container from '../../Components/Container/Container';
import GameMain from './GameMain/GameMain';
import GameSidebar from './GameSidebar/GameSidebar';
import {addClasses} from '../../utils/addClasses/addClasses';

import './lesson.css'


const Lesson = (props) => {

    const {lessonId} = props.match.params

    const [sideBarIsWide, setSideBarIsWide] = useState(false)

    const setWindowSizes = () => {
        setSideBarIsWide(!sideBarIsWide)
    }

    return (
        <Container>
            <div className='game mainLessonWindow'>
                <main
                    className={addClasses('game__main mainGame', {
                        'gameMainShort': sideBarIsWide
                    })}
                >
                    <GameMain/>
                </main>
                <div
                    className={addClasses('game__sidebar lessonSidebar', {
                        'wideSidebar': sideBarIsWide
                    })}
                >
                    <GameSidebar
                        webcamOnClick={setWindowSizes}
                    />
                </div>
            </div>
        </Container>
    );
}

export default Lesson;