import React, { useContext } from 'react';

import { ChildProfileContext } from 'context/ChildProfileContext/ChildProfileContext.js';
import { addClasses } from 'utils/addClasses/addClasses.js';


const StagesLinks = () => {

  const {
    stage
  } = useContext(ChildProfileContext);

  const stagesLinks = [
    'Основная информация ребенка',
    'С чем вам помочь?',
    'Был ли у вас опыт работы с другими специалистами?',
    'Как вы о нас узнали?',
  ]

  return (
      <div className='profile-child__links'>
        {stagesLinks.map((stageLink, index) => {
          const stageOfLink = index + 1
          return (
              <div
                  className={addClasses('profile-child__link', {
                    'write-in': parseInt(stage) > stageOfLink,
                    'active': parseInt(stage) === stageOfLink
                  })}
                  key={index}
              >
                {stageLink}
              </div>
          )
        })}
      </div>
  );
}

export default StagesLinks;
