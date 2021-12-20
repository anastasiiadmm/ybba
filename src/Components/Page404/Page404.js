import React from 'react';

import Container from 'Components/Container/Container.js';


const Page404 = () => {
    return (
        <Container>
            <div
                className='text-center m-auto'
                style={{ transform: 'scale(2)' }}
            >
                <h1>404</h1>
                <p>Страница не найдена</p>
            </div>
        </Container>
    );
}

export default Page404;