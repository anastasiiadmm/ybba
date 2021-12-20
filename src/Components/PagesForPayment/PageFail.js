import React from 'react';

import Container from 'Components/Container/Container.js';


const PageFail = () => {
    return (
        <Container>
            <div
                className='text-center m-auto'
                style={{ transform: 'scale(2)' }}
            >
                <p>Оплата не удалась, обратитесь в службу технической поддержки</p>
            </div>
        </Container>
    );
}

export default PageFail;