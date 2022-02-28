import React from 'react';

import Container from 'Components/Container/Container';
import SideBar from 'Components/SideBar/SideBar';


const SidebarContainer = (props) => {

  const { children } = props

  return (
      <Container>
        <SideBar/>
        <div className='sidebar'/>
        <main className='main'>
          {children}
        </main>
      </Container>
  );
}

export default SidebarContainer;
