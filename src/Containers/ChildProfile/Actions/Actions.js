import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'Components/Button/Button';
import { addClasses } from 'utils/addClasses/addClasses.js';


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
                Назад
            </Link>
            <Button
                className={addClasses('btn', {
                    'disabled': !isNextButtonActive
                })}
                type='submit'
            >
                Сохранить
            </Button>
        </div>
    );
}

Actions.propTypes = {
    isNextButtonActive: PropTypes.bool
}

export default Actions;