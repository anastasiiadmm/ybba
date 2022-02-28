import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { changeActiveGame } from 'redux/lesson/actions';
import { LessonContext } from 'context/LessonContext/LessonContext';
import { WsContext } from 'context/WsContext/WsContext';
import { addClasses } from 'utils/addClasses/addClasses';
import { lessonProperties } from 'constants.js';

const GameCarousel = (props) => {
  const { games } = props;
  const gameCarousel = useRef();

  const MIN_GAMES_IN_VIEWPORT = 4;
  const GAME_PREVIEW_WIDTH = 170;

  const [translateXValue, setTranslateXValue] = useState(0);
  const [rightSlideDisabled, setRightSlideDisabled] = useState(false);
  const [leftSlideDisabled, setLeftSlideDisabled] = useState(false);

  const {
    changeLessonContextProperty,
    isStyleDebug,
    activeGame,
    lessonId,
  } = useContext(LessonContext);
  const { sendWsAction } = useContext(WsContext);

  const [carouselIsVisible, setCarouselIsVisible] = useState(true);
  const toggleCarousel = async () => await setCarouselIsVisible(!carouselIsVisible);

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

  const slideCarousel = (direction) => {
    const step = direction === 'right' ? -GAME_PREVIEW_WIDTH : GAME_PREVIEW_WIDTH;
    setTranslateXValue(translateXValue + step);
  }

  useEffect(() => {
    if (translateXValue === 0)
      setLeftSlideDisabled(true);
    else if (Math.abs(translateXValue / GAME_PREVIEW_WIDTH) + MIN_GAMES_IN_VIEWPORT === games?.length)
      setRightSlideDisabled(true);
    else {
      setRightSlideDisabled(false);
      setLeftSlideDisabled(false);
    }

  }, [translateXValue]);

  return (
    <div className={addClasses('gamef__previews-wrap', {
      'debug--border': isStyleDebug,
    })}>
      <div className='gamef__previews gamesLitsScrollbar'>
        <div className={addClasses('slide__buttons-container w-100', {
           'hide': !carouselIsVisible,
         })}>
          <div
            style={{ opacity: +!leftSlideDisabled }}
            className='slide__button slide__button-left'
            onClick={() => slideCarousel('left')}
          />
          <div
            style={{ opacity: +!rightSlideDisabled }}
            className='slide__button slide__button-right'
            onClick={() => slideCarousel('right')}
          />
        </div>

        <div
          className={addClasses('gamef__previews-inner w-100', {
           'hide': !carouselIsVisible,
          })}
          ref={gameCarousel}
        >
          {games.map((game, index) => {
            return (
              <button
                className={addClasses('gamef__preview gameItem', {
                  active: game?.game_type === activeGame?.game_type,
                })}
                style={{ transform: `translateX(${translateXValue}px)` }}
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
