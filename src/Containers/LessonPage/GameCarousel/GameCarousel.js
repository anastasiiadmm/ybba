import React, { useCallback, useContext, useEffect, useRef, useState, useMemo } from 'react';
import { changeActiveGame } from 'redux/lesson/actions';
import { LessonContext } from 'context/LessonContext/LessonContext';
import { WsContext } from 'context/WsContext/WsContext';
import { addClasses } from 'utils/addClasses/addClasses';
import { lessonProperties } from 'constants.js';

const GameCarousel = (props) => {
  const { games } = props;
  const gameCarouselContainer = useRef();

  const MIN_GAMES_IN_VIEWPORT = 4;
  const GAME_PREVIEW_WIDTH = 170;
  const SLIDE_BUTTON_WIDTH = 42;

  const [translateXValue, setTranslateXValue] = useState(0);
  const [rightSlideDisabled, setRightSlideDisabled] = useState(false);
  const [leftSlideDisabled, setLeftSlideDisabled] = useState(false);
  const [rightSlideLeftMargin, setRightSlideLeftMargin] = useState(2000);

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

  const changeRightSlideLeftMargin = useCallback(() => {
    if (gameCarouselContainer?.current) {
      setRightSlideLeftMargin(gameCarouselContainer?.current.clientWidth - SLIDE_BUTTON_WIDTH - 20)
    }
  }, []);

  const checkCanSlideCarousel = () => {
    if (translateXValue === 0)
      setLeftSlideDisabled(true);
    else if (Math.abs(translateXValue / GAME_PREVIEW_WIDTH) + MIN_GAMES_IN_VIEWPORT === games?.length)
      setRightSlideDisabled(true);
    else {
      setRightSlideDisabled(false);
      setLeftSlideDisabled(false);
    }
  }
  const slideCarousel = (direction) => {
    let step = 0;

    if (direction === 'right' && !rightSlideDisabled)
      step = -GAME_PREVIEW_WIDTH;
    if (direction === 'left' && !leftSlideDisabled)
      step = GAME_PREVIEW_WIDTH;

    setTranslateXValue(translateXValue + step);
  }

  useEffect(checkCanSlideCarousel, [checkCanSlideCarousel, translateXValue]);

  useEffect(() => {
    changeRightSlideLeftMargin();
    window.addEventListener('resize', changeRightSlideLeftMargin);
  }, [changeRightSlideLeftMargin]);

  return (
    <div
      className={addClasses('gamef__previews-wrap', {
      'debug--border': isStyleDebug,
      })}
      ref={gameCarouselContainer}
    >
      <div className='gamef__previews gamesLitsScrollbar'>
        <div
          style={{ opacity: +!leftSlideDisabled }}
          className={addClasses('slide__button slide__button-left', {
            'hide': !carouselIsVisible,
          })}
          onClick={() => slideCarousel('left')}
        />
        <div
          style={{ opacity: +!rightSlideDisabled, left: rightSlideLeftMargin }}
          className={addClasses('slide__button slide__button-right', {
            'hide': !carouselIsVisible,
          })}
          onClick={() => slideCarousel('right')}
        />

        <div
          className={addClasses('gamef__previews-inner w-100', {
           'hide': !carouselIsVisible,
         })}>
          {sortedGames.map((game, index) => {
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
                  style={{ opacity: game?.game_type === activeGame?.game_type ? '100%' : '35%' }}
                  className='gamef__preview-img'
                  alt='Game'
                />
                <div className='gamef__preview-info'>
                  <span>Игра {game.game_code}</span>
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
