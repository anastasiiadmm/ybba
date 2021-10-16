import React from 'react';

import Button from '../../../Components/Button/Button.js';


const Balance = () => {
    return (
        <div className='info-item_high'>
            <div className='info-item info-item_md'>
                <h5 className='info-item__indetitle'>
                    <b>Баланс</b>
                </h5>
                <p className='info-item__text ruble'>0</p>
                <Button className='info-item__link' to='/add-balance/'>
                    Пополнить
                </Button>
            </div>
        </div>
    );
}

export default Balance;