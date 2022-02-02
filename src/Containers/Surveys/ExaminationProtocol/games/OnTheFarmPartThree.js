import React from 'react';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolSubtitleThree from 'Components/Surveys/ExaminationProtocol/ProtocolSubtitleThree/ProtocolSubtitleThree';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';

const OnTheFarmPartThree = (props) => {

    const {
        register, errors, control, isConclusionDisabled, disabled
    } = props

    return (
        <>
            <ProtocolBlock>
                <ProtocolPlaceholderTitle>Игра «На ферме». Часть 3</ProtocolPlaceholderTitle>
                <ProtocolSubtitleThree>Согласование сущ.+числ.</ProtocolSubtitleThree>

                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Одна белая курица'
                        name='game_on_the_farm_part_three.one_white_chicken'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Три рыжих курицы'
                        name='game_on_the_farm_part_three.three_ginger_hens'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Пять рябых куриц'
                        name='game_on_the_farm_part_three.five_speckled_hens'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Ребенок смешивает парадигмы разных окончаний'
                                name='game_on_the_farm_part_three.options_for_confinement'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Ребенок делает ошибки внутри одного падежа'
                                name='game_on_the_farm_part_three.options_for_confinement'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Комментарий'
                        name='game_on_the_farm_part_three.expert_comment'
                        placeholder='Комментарий специалиста'
                        register={register}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolBlockTitle>Психологическая база речи: Внимание</ProtocolBlockTitle>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Речевое внимание:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Сформировано'
                                name='game_on_the_farm_part_three.speech_comprehension'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Сформировано недостаточно'
                                name='game_on_the_farm_part_three.speech_comprehension'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не сформировано'
                                name='game_on_the_farm_part_three.speech_comprehension'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Распределение:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Наблюдаются трудности распределения внимания'
                                name='game_on_the_farm_part_three.there_are_difficulties_in_distributing_attention'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Концентрация:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Низкая концентрация и неустойчивость внимания в целом (ребенок плохо сосредотачивается, с трудом удерживает внимание на объекте)'
                                name='game_on_the_farm_part_three.concentration'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Наблюдаются трудности концентрации произвольного внимания'
                                name='game_on_the_farm_part_three.concentration'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Устойчивость:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Внимание неустойчивое, поверхностное, ребенок очень быстро истощается'
                                name='game_on_the_farm_part_three.sustainability'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Внимание недостаточно устойчивое'
                                name='game_on_the_farm_part_three.sustainability'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Внимание устойчивое'
                                name='game_on_the_farm_part_three.sustainability'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Истощаемость:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Внимание ребенка характеризуется быстрой истощаемостью'
                                name='game_on_the_farm_part_three.child_s_attention_is_characterized_by_rapid_exhaustion'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Объем:'
                        name='game_on_the_farm_part_three.volume'
                        register={register}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Переключаемость:'
                        name='game_on_the_farm_part_three.switchability'
                        register={register}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                </ProtocolRow>
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolBlockTitle>Психологическая база речи: Познавательная активность. Мотивация и
                    интерес</ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Утомляемость:'
                        name='game_on_the_farm_part_three.fatigue'
                        register={register}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Контактность'
                        name='game_on_the_farm_part_three.contact'
                        register={register}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Работоспособность'
                        name='game_on_the_farm_part_three.working_capacity'
                        register={register}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Мотивация'
                        name='game_on_the_farm_part_three.motivation'
                        register={register}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Интерес'
                        name='game_on_the_farm_part_three.interest'
                        register={register}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                </ProtocolRow>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Крайне низкая познавательная активность и мотивация к предметной, предметно-игровой
									деятельности'
                            name='game_on_the_farm_part_three.options_for_confinement_psychological_basis'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Низкая познавательная активность и мотивация к различным видам деятельности, наблюдается
									немотивированная
									избирательность познавательной активности'
                            name='game_on_the_farm_part_three.options_for_confinement_psychological_basis'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Отмечается некоторая недостаточность познавательной активности и мотивации к предметной
									деятельности'
                            name='game_on_the_farm_part_three.options_for_confinement_psychological_basis'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Ярко выраженная познавательная активность и мотивация к предметной, предметно-игровой
									деятельности'
                            name='game_on_the_farm_part_three.options_for_confinement_psychological_basis'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                </ProtocolRow>
            </ProtocolBlock>

            <ProtocolBlock>
                <ProtocolBlockTitle>Просодическая сторона речи</ProtocolBlockTitle>
                <ProtocolSubtitleThree>Компоненты:</ProtocolSubtitleThree>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Голос</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Афония'
                                name='game_on_the_farm_part_three.voice'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Дисфония'
                                name='game_on_the_farm_part_three.voice'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Нормальный'
                                name='game_on_the_farm_part_three.voice'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Хриплый'
                                name='game_on_the_farm_part_three.voice_part_two'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Звонкий'
                                name='game_on_the_farm_part_three.voice_part_two'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Громкий'
                                name='game_on_the_farm_part_three.voice_part_three'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Тихий'
                                name='game_on_the_farm_part_three.voice_part_three'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Писклявый'
                                name='game_on_the_farm_part_three.voice_part_four'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Очень низкий'
                                name='game_on_the_farm_part_three.voice_part_four'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Немодулированный'
                                name='game_on_the_farm_part_three.voice_part_five'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Слабо модулированный'
                                name='game_on_the_farm_part_three.voice_part_five'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Назализованный голос'
                                name='game_on_the_farm_part_three.nasalized_voice'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Плавность</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Речь плавная'
                                name='game_on_the_farm_part_three.smoothness'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Речь неплавная'
                                name='game_on_the_farm_part_three.smoothness'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Темп</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Нормальный'
                                name='game_on_the_farm_part_three.pace'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Быстрый'
                                name='game_on_the_farm_part_three.pace'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Медленный'
                                name='game_on_the_farm_part_three.pace'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Патологически ускоренный'
                                name='game_on_the_farm_part_three.pace'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Патологически замедленный'
                                name='game_on_the_farm_part_three.pace'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Речь</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='На вдохе'
                                name='game_on_the_farm_part_three.speech'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='На выдохе'
                                name='game_on_the_farm_part_three.speech'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Иссякает к концу фразы'
                                name='game_on_the_farm_part_three.speech'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Дыхание</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Ключичное'
                                name='game_on_the_farm_part_three.breath'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Грудное'
                                name='game_on_the_farm_part_three.breath'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Диафрагмальное'
                                name='game_on_the_farm_part_three.breath'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Смешанное'
                                name='game_on_the_farm_part_three.breath'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Выдох укорочен'
                                name='game_on_the_farm_part_three.exhalation'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Выдох плавный'
                                name='game_on_the_farm_part_three.exhalation'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Затруднённое'
                                name='game_on_the_farm_part_three.hindered'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Поверхностное'
                                name='game_on_the_farm_part_three.superficial'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Неритмичное'
                                name='game_on_the_farm_part_three.breathing_is_not_rhythmic'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Вдох неглубокий'
                                name='game_on_the_farm_part_three.shallow_breath'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        {errors.choices && <div className='form2__error'> {errors.choices.message}</div>}
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Ритм</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не нарушен'
                                name='game_on_the_farm_part_three.rhythm'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Нарушен: речь растянутая, скандированная'
                                name='game_on_the_farm_part_three.rhythm'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Сила выдоха</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Слабая'
                                name='game_on_the_farm_part_three.expiratory_force'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Сильная'
                                name='game_on_the_farm_part_three.expiratory_force'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Дифференцированность вдоха/выдоха и возможность управления</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='В норме'
                                name='game_on_the_farm_part_three.inspiratory_expiratory_differentiation'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Нарушена'
                                name='game_on_the_farm_part_three.inspiratory_expiratory_differentiation'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Просодическая организация речи характеризуется неадекватным интонационным оформлением высказывания;
									речь
									невнятная, смазанная, малопонятная для окружающих'
                                        name='game_on_the_farm_part_three.prosodic_side_of_speech'
                                        control={control}
                                        errors={errors}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Разборчивость речи несколько снижена, речь нечеткая'
                                        name='game_on_the_farm_part_three.prosodic_side_of_speech'
                                        control={control}
                                        errors={errors}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Речь внятная, понятная для окружающих'
                                        name='game_on_the_farm_part_three.prosodic_side_of_speech'
                                        control={control}
                                        errors={errors}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Речь интонационно выразительна'
                                        name='game_on_the_farm_part_three.speech_intonationally'
                                        control={control}
                                        errors={errors}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label='Речь интонационно невыразительна: слабая выраженность голосовых модуляций'
                                        name='game_on_the_farm_part_three.speech_intonationally'
                                        control={control}
                                        errors={errors}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                        </ProtocolRow>
                        <ProtocolDescriptionSubtitle>Нарушение темпо-ритмической организации речи:</ProtocolDescriptionSubtitle>
                        <ProtocolResultBlock>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Судороги'
                                    name='game_on_the_farm_part_three.violation_of_tempo_rhythmic_organization_of_speech'
                                    control={control}
                                    errors={errors}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Запинки'
                                    name='game_on_the_farm_part_three.violation_of_tempo_rhythmic_organization_of_speech'
                                    control={control}
                                    errors={errors}
                                />
                            </ProtocolResultWrapper>
                        </ProtocolResultBlock>
                    </ProtocolBlock>
                </>
            )}
        </>
    );
};

export default OnTheFarmPartThree;