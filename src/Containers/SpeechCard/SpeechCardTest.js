import React from 'react';
import SpeechCard from './SpeechCard';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/auth/authSlice';

const SpeechCardTest = (props) => {

    const {user} = useSelector(authSelector)

    return (
        <div>
            <SpeechCard
                child={user.profile.children[0]}
                parent={user}
            />
        </div>
    );
}

export default SpeechCardTest;