import React, { useContext, useEffect, useState } from 'react';
import { changeActiveGame } from 'redux/lesson/actions';
import { WsContext } from 'context/WsContext/WsContext';
import { addClasses } from 'utils/addClasses/addClasses';

const GameCarousel = (props) => {
  const {
    handleReInitGame,
    activeGame,
    lessonId,
    games,
    isStyleDebug,
  } = props;

  const { sendWsAction } = useContext(WsContext);

  const [carouselIsVisible, setCarouselIsVisible] = useState(true);
  const toggleCarousel = async () => await setCarouselIsVisible(!carouselIsVisible);

  const onChangeActiveGame = (game) => {
    if (!activeGame || (game.id !== activeGame.id)) {
      handleReInitGame();
      sendWsAction(
        changeActiveGame({ lesson_id: lessonId, game_id: game.game_type })
      );
    }
  };

  return (
    <div className={addClasses('gamef__previews-wrap', {
      'debug--border': isStyleDebug,
    })}>
      <div className='gamef__previews gamesLitsScrollbar'>
        <div className={addClasses('gamef__previews-inner w-100', {
           'hide': !carouselIsVisible,
         })}>
          {games.map((game, index) => {
              return (
                <button
                  className={addClasses('gamef__preview gameItem', {
                    active: game?.game_type === activeGame?.game_type,
                  })}
                  onClick={() => onChangeActiveGame(game)}
                >
                  <img
                    src={game.preview}
                    className='gamef__preview-img'
                    alt='Game'
                  />
                  <div className='gamef__preview-info'>
                    <span>Игра {index + 1}</span>
                    <p>{game.name}</p>
                  </div>
                </button>
              );
            })}
        </div>
      </div>
      <div className='gamef__under-carousel'>
        <button
          className={addClasses('gamef__hide-carousel', {
            'hide': !carouselIsVisible,
          })}
          type='button'
          onClick={() => toggleCarousel()}
        >Все игры</button>
      </div>
    </div>
  );
};

export default GameCarousel;
