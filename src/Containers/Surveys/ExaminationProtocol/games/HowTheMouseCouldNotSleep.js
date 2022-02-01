import React from 'react';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolRowText from 'Components/Surveys/ExaminationProtocol/ProtocolRowText/ProtocolRowText';
import ProtocolTitleTest from 'Components/Surveys/ExaminationProtocol/ProtocolTitleTest/ProtocolTitleTest';
import ProtocolSwitchText from 'Components/Surveys/ExaminationProtocol/ProtocolSwitchText/ProtocolSwitchText';
import ProtocolTextTest from 'Components/Surveys/ExaminationProtocol/ProtocolTextTest/ProtocolTextTest';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionMain from 'Components/Surveys/ExaminationProtocol/ProtocolDescriptionMain/ProtocolDescriptionMain';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';

const HowTheMouseCouldNotSleep = (props) => {

    const  {
        register, errors, control, isConclusionDisabled, disabled, isLessonFinished
    } = props

    return (
        <>
            <ProtocolBlock>
                <ProtocolPlaceholderTitle>Игра «Как мышонку не спалось»</ProtocolPlaceholderTitle>
                <ProtocolBlockTitle>Обследование связной речи</ProtocolBlockTitle>
                <ProtocolPlaceholderTitle>— Послушай рассказ. Расставь картинки по порядку.</ProtocolPlaceholderTitle>
                <ProtocolTextTest>
                    Маленькому мышонку не спалось. Пошел темной ночью он по лесу гулять. Увидел яблочко в траве и съел
                    его. Увидел
                    ягодку и тоже съел. Заметил он в луже белый светящийся круг. Подумал, что это сыр, хотел и его
                    слопать, но
                    ничего
                    не вышло. Не пропадать же добру! Решил накрыть его лопухом — пусть до утра полежит. А утром вместо
                    белого круга
                    обнаружил он в воде большое красное солнышко
                </ProtocolTextTest>
                <ProtocolRowText>
                    <ProtocolTitleTest>1) Мышонок во дворе ночью</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.mouse_in_the_yard_at_night'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.mouse_in_the_yard_at_night'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolTitleTest>2) Мышонок ест яблоко и ягоду</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.mouse_is_eating_an_apple_and_a_berry'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.mouse_is_eating_an_apple_and_a_berry'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolTitleTest>3) Луна в отражении воды в луже</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.moon_in_the_reflection_of_the_water_in_a_puddle'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.moon_in_the_reflection_of_the_water_in_a_puddle'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolTitleTest>4) Мышонок накрывает лужу лопухом</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.mouse_covers_the_puddle_with_burdock'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.mouse_covers_the_puddle_with_burdock'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolTitleTest>5) Солнце в отражении воды в луже</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.sun_in_water_reflection_in_a_puddle'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.sun_in_water_reflection_in_a_puddle'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolPlaceholderTitle>— Ответь на вопросы</ProtocolPlaceholderTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='1. Чем оказался белый светящийся круг?'
                            name='game_how_the_mouse_could_not_sleep.what_was_the_white_glowing_circle'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='2. Когда мышонок пошел гулять?'
                            name='game_how_the_mouse_could_not_sleep.when_did_the_mouse_go_for_a_walk'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='3. Что увидел мышонок во дворе?'
                            name='game_how_the_mouse_could_not_sleep.what_did_the_mouse_see_in_the_forest'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='4. Чем мышонок накрыл луну?'
                            name='game_how_the_mouse_could_not_sleep.what_did_the_mouse_cover_the_moon_with'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='5. Что увидел в луже мышонок утром?'
                            name='game_how_the_mouse_could_not_sleep.what_did_the_mouse_see_in_the_puddle_in_the_morning'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='6. Почему вместо луны мышонок обнаружил солнышко?'
                            name='game_how_the_mouse_could_not_sleep.why_instead_of_the_moon_the_mouse_found_the_sun'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                <ProtocolPlaceholderTitle>— Повтори всю историю, как запомнил:</ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='game_how_the_mouse_could_not_sleep.repeat_the_whole_story_as_you_remember'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                {isLessonFinished && (
                    <>
                        <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                        <ProtocolRow>
                            <ProtocolDescriptionMain>Продуцирование:</ProtocolDescriptionMain>
                            <ProtocolDescriptionSubtitle>Построение высказывания:</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Может построить собственное высказывание на основе полученной визуально информации'
                                        name='game_how_the_mouse_could_not_sleep.constructing_a_statement'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Не может построить собственное высказывание на основе полученной визуально информации'
                                        name='game_how_the_mouse_could_not_sleep.constructing_a_statement'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>Соответствие сюжету:</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Рассказ соответствует предложенному сюжету'
                                        name='game_how_the_mouse_could_not_sleep.consistency_with_the_plot'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Рассказ не соответствует предложенному сюжету'
                                        name='game_how_the_mouse_could_not_sleep.consistency_with_the_plot'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>Тема:</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Раскрыта'
                                        name='game_how_the_mouse_could_not_sleep.topic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Раскрыта частично'
                                        value='тема раскрыта частично'
                                        name='game_how_the_mouse_could_not_sleep.topic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Не раскрыта'
                                        value='не раскрыто'
                                        name='game_how_the_mouse_could_not_sleep.topic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>Временную, логическую последовательность событий:</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Соблюдает'
                                        name='game_how_the_mouse_could_not_sleep.chronological_event_logic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Не соблюдает'
                                        name='game_how_the_mouse_could_not_sleep.chronological_event_logic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>Языковые средства:</ProtocolDescriptionSubtitle>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Свободно владеет языковыми средствами и адекватно их использует при построении связного текста'
                                    name='game_how_the_mouse_could_not_sleep.language_means'
                                    control={control}
                                    errors={errors}
                                    disabled={isConclusionDisabled || disabled}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Неадекватно использует языковые средства при построении связного текста'
                                    name='game_how_the_mouse_could_not_sleep.language_means'
                                    control={control}
                                    errors={errors}
                                    disabled={isConclusionDisabled || disabled}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Фразовые персеверации'
                                        name='game_how_the_mouse_could_not_sleep.phrasal_perseverations'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionMain>Репродуцирование:</ProtocolDescriptionMain>
                            <ProtocolDescriptionSubtitle>Ребенок не испытывает трудностей в репродуцировании текста:</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Пересказ соответствует оригиналу'
                                        name='game_how_the_mouse_could_not_sleep.retelling_corresponds_to_original'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Пересказ содержит как основную, так и дополнительную информацию'
                                        name='game_how_the_mouse_could_not_sleep.retelling_contains_both_basic_and_additional_information'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='При пересказе используется вариативность речи'
                                        name='game_how_the_mouse_could_not_sleep.retelling_uses_variability_of_speech'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>Наблюдаются некоторые трудности в репродуцировании текста:</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Пересказ частично соответствует оригиналу'
                                        name='game_how_the_mouse_could_not_sleep.retelling_partially_corresponds_to_original'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Пересказ содержит только основную информацию'
                                        name='game_how_the_mouse_could_not_sleep.retelling_contains_only_basic_information'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Сохраняются лексика и синтаксические конструкции оригинала'
                                        name='game_how_the_mouse_could_not_sleep.vocabulary_and_syntactic_constructions_of_original'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Не нарушена связность и логичность изложения'
                                        name='game_how_the_mouse_could_not_sleep.coherence_and_consistency_of_presentation_is_not_broken'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>Наблюдаются значительные трудности в репродуцировании текста:</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Пересказ не соответствует оригиналу'
                                        name='game_how_the_mouse_could_not_sleep.retelling_does_not_correspond_to_original'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Нарушена смысловая организация текста'
                                        name='game_how_the_mouse_could_not_sleep.semantic_organization_of_text_is_broken'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Нарушена связность и логичность изложения'
                                        name='game_how_the_mouse_could_not_sleep.coherence_and_consistency_of_presentation_is_broken'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label='Значительные трудности в языковом оформлении текста'
                                        name='game_how_the_mouse_could_not_sleep.significant_difficulties_in_language_design_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionMain>Понимание:</ProtocolDescriptionMain>
                            <ProtocolDescriptionSubtitle>Содержательно-смысловое значение текста:</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Идентифицирует'
                                        name='game_how_the_mouse_could_not_sleep.content_semantic_meaning_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Не идентифицирует'
                                        name='game_how_the_mouse_could_not_sleep.content_semantic_meaning_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>Понимание:</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Понимает только основную информацию текста'
                                        name='game_how_the_mouse_could_not_sleep.understands_only_basic_information_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Доступно понимание как основной, так и дополнительной информации каждой смысловой части текста'
                                        name='game_how_the_mouse_could_not_sleep.understands_only_basic_information_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Доступно понимание скрытого смысла'
                                        name='game_how_the_mouse_could_not_sleep.understands_only_basic_information_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                        </ProtocolRow>
                    </>
                )}
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Комментарий'
                        name='game_how_the_mouse_could_not_sleep.expert_comment'
                        placeholder='Комментарий специалиста'
                        register={register}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolBlock>
        </>
    );
};

export default HowTheMouseCouldNotSleep;