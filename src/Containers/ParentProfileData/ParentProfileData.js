import React from 'react';

import PropTypes from 'prop-types';


const ParentProfileData = (props) => {

    const {user} = props

    return (
        <>
            {user && <div className='cabinet__cols'>
                <div className='cabinet__col'>
                    <dl className='cabinet__info'>
                        <dt>Имя</dt>
                        <dd>{user?.profile?.first_name || 'Имя не указано'}</dd>
                        <dt>Дата рождения</dt>
                        <dd>{user?.profile?.date_of_birth || 'Дата рождения не указана'}</dd>
                        {/*<dt>Регион проживания</dt>*/}
                        {/*<dd>Foo</dd>*/}
                        <dt>Email</dt>
                        <dd>{user.email}</dd>
                    </dl>
                </div>

                <div className='cabinet__col'>
                    <dl className='cabinet__info'>
                        <dt>Фамилия</dt>
                        <dd>{user.profile.last_name || 'Фамилия не указана'}</dd>
                        <dt>Мобильный телефон</dt>
                        <dd>{user.profile.phone_number || 'Номер телефона не указан'}</dd>
                    </dl>
                </div>
            </div>
            }
        </>
    );
}

ParentProfileData.propTypes = {
    user: PropTypes.object.isRequired
}

export default ParentProfileData;