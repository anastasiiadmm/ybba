import React from 'react';
import './gameTipSidebar.css';

const GameTipSidebar = (props) => {
  const {
    setIsGameTipOpen,
    gameDescription,
    gameName,
  } = props;

  const closeGameTip = () => {
    setIsGameTipOpen(false);
  }

  return (
    <div className='gamef__sidebar'>
      <div className='gamef__sidebar-in overflow-hidden gamef__tip'>
        <div className='tip__title'>{gameName}</div>
        <div className='tip__description'>{gameDescription}</div>
        <div className='tip__action'>
          <button
            className='hide-tip'
            onClick={() => closeGameTip()}
          >Закрыть подсказку</button>
        </div>
      </div>
    </div>
  );
};

export default GameTipSidebar;
