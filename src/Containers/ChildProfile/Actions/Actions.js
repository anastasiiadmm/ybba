import React from 'react';
import Button from '../../../Components/Button/Button';
import {addClasses} from '../../../utils/addClasses/addClasses';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Actions = (props) => {

    const {
        isNextButtonActive
    } = props

    return (
        <div className='content__bottom'>
            <Link
                className='btn btn_light'
                to='/child-profile/'
            >
                Отмена
            </Link>
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