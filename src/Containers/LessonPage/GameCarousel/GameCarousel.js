import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { changeActiveGame } from 'redux/lesson/actions';
import { LessonContext } from 'context/LessonContext/LessonContext';
import { WsContext } from 'context/WsContext/WsContext';
import { addClasses } from 'utils/addClasses/addClasses';
import { lessonProperties } from 'constants.js';

const GameCarousel = (props) => {
  const { games } = props;

  const {
    changeLessonContextProperty,
    isStyleDebug,
    activeGame,
    lessonId,
  } = useContext(LessonContext);
  const { sendWsAction } = useContext(WsContext);

  const [carouselIsVisible, setCarouselIsVisible] = useState(true);
  const toggleCarousel = async () => await setCarouselIsVisible(!carouselIsVisible);

  const sortedGames = useMemo(() => {
    console.log(games);
    if (!games) return [];
    console.log(games);
    return [...games].sort((p, n) => p?.carousel_numeric_type > n?.carousel_numeric_type ? 1 : -1);
  }, [games]);

  const reInitGame = useCallback(() => {
    changeLessonContextProperty(lessonProperties.IS_DISPLAY_RESTART, false);
    changeLessonContextProperty(lessonProperties.IS_GAME_MUTED, false);
  }, [changeLessonContextProperty]);

  const onChangeActiveGame = (game) => {
    if (!activeGame || (game.id !== activeGame.id)) {
      reInitGame();
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
          {sortedGames.map((game, index) => {
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
                    <span>{game.game_code}</span>
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
