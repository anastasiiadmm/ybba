import React from 'react';

import Container from 'Components/Container/Container.js';


const PageSuccess = () => {
    return (
        <Container>
            <div
                className='text-center m-auto'
                style={{ transform: 'scale(2)' }}
            >
                <p>Оплата прошла успешно</p>
            </div>
        </Container>
    );
}

export default PageSuccess;