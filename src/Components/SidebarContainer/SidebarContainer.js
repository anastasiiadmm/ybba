import React from 'react';

import Container from '../Container/Container';
import SideBar from '../SideBar/SideBar';


const SidebarContainer = (props) => {

    const {children} = props

    return (
        <Container>
            <SideBar/>
            <main className='main'>
                {children}
            </main>
        </Container>
    );
}

export default SidebarContainer;