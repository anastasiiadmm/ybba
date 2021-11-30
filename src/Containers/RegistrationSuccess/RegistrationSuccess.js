import React from 'react';

const RegistrationSuccess = () => {
    return (
        <div className='all-page2' style={{ height: '100vh' }}>
            <div className='notification'>
                <div className='notification__inner'>
                    <h4 className='notification__title'>Спасибо за регистрацию!</h4>
                    <p className='notification__text'>Попасть на платформу пока что возможно только с компьютера или
                        ноутбука, поэтому мы отправили ссылку для доступа на вашу почту</p>
                    <button type='button' className='btn2'>Понятно</button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationSuccess;