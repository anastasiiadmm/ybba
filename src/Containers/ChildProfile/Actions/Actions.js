import React, {useContext} from 'react';
import Button from '../../../Components/Button/Button';
import {addClasses} from '../../../utils/addClasses/addClasses';
import {ChildProfileContext} from '../../../context/ChildProfileContext/ChildProfileContext';
import PropTypes from 'prop-types';

const Actions = (props) => {

    const {
        isNextButtonActive
    } = props

    return (
        <div className='content__bottom'>
            <Button
                className='btn btn_light'
                to='/child-profile/'
            >
                Отмена
            </Button>
            <Button
                className={addClasses('btn', {
                    'disabled': !isNextButtonActive
                })}
                type='submit'
            >
                Далее
            </Button>
        </div>
    );
}

Actions.propTypes = {
    isNextButtonActive: PropTypes.bool
}

export default Actions;