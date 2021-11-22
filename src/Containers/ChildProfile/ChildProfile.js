import React from 'react';

import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import { ChildProfileContext } from 'context/ChildProfileContext/ChildProfileContext.js';
import ChildProfileStageFour from 'Containers/ChildProfile/stages/ChildProfileStageFour';
import ChildProfileStageOne from 'Containers/ChildProfile/stages/ChildProfileStageOne';
import ChildProfileStageThree from 'Containers/ChildProfile/stages/ChildProfileStageThree';
import ChildProfileStageTwo from 'Containers/ChildProfile/stages/ChildProfileStageTwo';


const ChildProfile = (props) => {

    const { stage, childId } = props.match.params

    const stages = {
        '1': {
            component: <ChildProfileStageOne/>
        },
        '2': {
            component: <ChildProfileStageTwo/>
        },
        '3': {
            component: <ChildProfileStageThree/>
        },
        '4': {
            component: <ChildProfileStageFour/>,
        }
    }
    const currentStage = stages[stage]

    const childProfileContextData = {
        childId,
        stage,
        currentStage
    };

    return (
        <SidebarContainer>
            <ChildProfileContext.Provider value={childProfileContextData}>
                <div className='main__inner'>
                    <div className='main__title-block'>
                        <h1 className='main__title'>С чем вам помочь?</h1>
                    </div>
                    <div className='content'>
                        <div className='content__inner'>
                            {currentStage?.component}
                            <div/>
                        </div>
                    </div>
                </div>
            </ChildProfileContext.Provider>
        </SidebarContainer>
    );
}

export default ChildProfile;