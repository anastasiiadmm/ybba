import React from 'react';
import {Link} from 'react-router-dom';


const Balance = () => {
    return (
        <div className='info-item_high'>
            <div className='info-item info-item_md'>
                <h5 className='info-item__indetitle'>
                    <b>Баланс</b>
                </h5>
                <p className='info-item__text ruble'>0</p>
                <Link
                    className='info-item__link'
                    to='/add-balance/'
                >
                    Пополнить
                </Link>
            </div>
        </div>
    );
}

export default Balance;