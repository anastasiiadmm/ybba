import React, {useState} from 'react';

import FormField from '../../../Components/FormField/FormField';


const ChildProfileStageTwo = () => {

    const [isChildHaveTherapist, setIsParentHaveTherapist] = useState(false);

    return (
        <>
            <p className='profile-child__descr'>
                Был ли у вас опыт работы с другими специалистами?
            </p>
            <ul className='profile-child__practice'>
                <li>
                    <FormField
                        type='radio'
                        label='Да'
                        id='practiceYes'
                        checked={isChildHaveTherapist}
                        onChange={() => setIsParentHaveTherapist(true)}
                    />
                </li>
                <li>
                    <FormField
                        type='radio'
                        label='Нет'
                        id='practiceNo'
                        checked={!isChildHaveTherapist}
                        onChange={() => setIsParentHaveTherapist(false)}
                    />
                </li>
            </ul>
            {isChildHaveTherapist && (
                <div>
                    <p className='profile-child__spec-descr'>Специалисты</p>
                    <div className='profile-child__spec-info'/>
                    <button className='btn' type='button'>Добавить специалиста</button>
                </div>
            )}
        </>
    );
}

export default ChildProfileStageTwo;