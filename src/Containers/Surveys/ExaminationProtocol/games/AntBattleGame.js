import React from 'react';

import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolBox from 'Components/Surveys/ExaminationProtocol/ProtocolBox/ProtocolBox';
import ProtocolBoxTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBoxTitle/ProtocolBoxTitle';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';
import ProtocolTitle from 'Components/Surveys/ExaminationProtocol/ProtocolTitle/ProtocolTitle';
import ProtocolDescriptionMain from 'Components/Surveys/ExaminationProtocol/ProtocolDescriptionMain/ProtocolDescriptionMain';

const AntBattleGame = (props) => {

    const {
        register, errors, control, disabled
    } = props

    return (
        <>
            <ProtocolBlock>
                <ProtocolPlaceholderTitle>Игра “Муравьиный батл”</ProtocolPlaceholderTitle>
                <ProtocolBlockTitle>Состояние артикуляционного аппарата и двигательного развития</ProtocolBlockTitle>
                <p className='protocol__subtitle-block'>Артикуляционная моторика</p>
                <p className='protocol__sub2title-block'>Праксис</p>
                <ProtocolBox>
                    <ProtocolBoxTitle>Статический праксис</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Забор'
                            name='game_ant_battle.fence'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Лопаточка'
                            name='game_ant_battle.spatula'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Иголка'
                            name='game_ant_battle.needle'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Грибочек'
                            name='game_ant_battle.mushroom'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Окошко (открой рот)'
                            name='game_ant_battle.window'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBox>
                    <ProtocolBoxTitle>Динамический праксис</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Часики'
                            name='game_ant_battle.watch'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Качели'
                            name='game_ant_battle.swing'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='лошадка'
                            name='game_ant_battle.horse'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Тонус:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolFormField
                            type='radio'
                            label='Спастичность мышц языка'
                            name='game_ant_battle.tone'
                            control={control}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolFormField
                            type='radio'
                            label='Гипотония мышц языка'
                            name='game_ant_battle.tone'
                            control={control}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolFormField
                            type='radio'
                            label='Дистония мышц языка'
                            name='game_ant_battle.tone'
                            control={control}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Девиация языка (отклонения языка в сторону)'
                                name='game_ant_battle.deviation_of_the_tongue'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Гиперкинезы языка'
                                name='game_ant_battle.hyperkinesis_of_the_tongue'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Тремор языка'
                                name='game_ant_battle.tremor_of_the_tongue'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Трудности переключения'
                                name='game_ant_battle.switching_difficulties'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Темп выполнения движений:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Замедленный темп выполнения движений'
                                name='game_ant_battle.pace_of_the_movements'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Ускоренный темп выполнения движений'
                                name='game_ant_battle.pace_of_the_movements'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Комментарий'
                        name='game_ant_battle.expert_comment'
                        placeholder='Комментарий специалиста'
                        register={register}
                    />
                </ProtocolRow>
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolBlockTitle>Мимическая мускулатура <span>Упражнение:</span></ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Поднять брови'
                        name='game_ant_battle.raise_eyebrows'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Нахмурить брови'
                        name='game_ant_battle.frown'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Подмигнуть'
                        name='game_ant_battle.wink'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Надуть щеки'
                        name='game_ant_battle.puff_out_cheeks'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Тонус мышц лица:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Спастичность'
                                name='game_ant_battle.facial_muscle_tone'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Гипотония'
                                name='game_ant_battle.facial_muscle_tone'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Дистония'
                                name='game_ant_battle.facial_muscle_tone'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Гипомимия'
                                name='game_ant_battle.hypomimia'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Сглаженность носогубной складки'
                                name='game_ant_battle.smoothness_of_nasolabial_fold'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Асимметрия лица'
                                name='game_ant_battle.asymmetry_of_face'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Гиперкинезы лица'
                                name='game_ant_battle.facial_hyperkinesis'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Синкинезии'
                                name='game_ant_battle.synkinesis'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolResultTitle>Тонус мышц губ:</ProtocolResultTitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Спастичность'
                                name='game_ant_battle.lip_muscle_tone'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Гипотония'
                                name='game_ant_battle.lip_muscle_tone'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Дистония'
                                name='game_ant_battle.lip_muscle_tone'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Ограничение подвижности губ'
                                name='game_ant_battle.restriction_of_lip_mobility'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolResultTitle>Гиперсаливация:</ProtocolResultTitle>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Постоянная'
                            name='game_ant_battle.hypersalivation'
                            control={control}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='После функциональной нагрузки'
                            name='game_ant_battle.hypersalivation'
                            control={control}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolResultWrapper>
                </ProtocolRow>
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolTitle>Общая и мелкая моторика</ProtocolTitle>
                <ProtocolBlockTitle>Праксис</ProtocolBlockTitle>
                <ProtocolBox>
                    <p className='protocol__sub2title-block'>Статический праксис</p>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Постой на одной ноге, на другой (под счет до 4х)'
                            name='game_ant_battle.static_praxis_stand_on_one_leg_over_the_other'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Поднимись на цыпочки, постой (под счет до 4х)'
                            name='game_ant_battle.static_praxis_get_up_on_tiptoe_wait'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBox>
                    <ProtocolBoxTitle>Динамический праксис</ProtocolBoxTitle>
                    <ProtocolFormField
                        type='text'
                        label='Попрыгай на одной ноге, другой, двух (под счет до 5ти на каждую ногу)'
                        name='game_ant_battle.dynamic_praxis_jump_on_one_leg_the_other_two'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolBox>
                <ProtocolBox>
                    <ProtocolBoxTitle>Пространственный праксис</ProtocolBoxTitle>
                    <ProtocolFormField
                        type='text'
                        label='Повернись направо, налево'
                        name='game_ant_battle.spatial_praxis_turn_right_left'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolBox>
                <p className='protocol__sub2title-block'>Пальцевый праксис</p>
                <ProtocolBox>
                    <ProtocolBoxTitle>Статический праксис</ProtocolBoxTitle>
                    <ProtocolFormField
                        type='text'
                        label='Покажи «V» («зайку»)'
                        name='game_ant_battle.show_v'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                    <ProtocolFormField
                        type='text'
                        label='Покажи «корову»'
                        name='game_ant_battle.show_the_cow'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolBox>
                <ProtocolBox>
                    <ProtocolBoxTitle>Динамический праксис</ProtocolBoxTitle>
                    <ProtocolFormField
                        type='text'
                        label='Покажи «зайку» - «корову» под счет'
                        name='game_ant_battle.show_the_bunny_the_cow_is_counted'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolBox>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Основные двигательные навыки:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Сформированы'
                                name='game_ant_battle.basic_motor_skills'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Сформированы недостаточно'
                                name='game_ant_battle.basic_motor_skills'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не сформированы'
                                name='game_ant_battle.basic_motor_skills'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Соответствуют возрасту'
                                name='game_ant_battle.basic_motor_skills_part_two'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не соответствуют возрасту'
                                name='game_ant_battle.basic_motor_skills_part_two'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionMain>Нарушения первичной моторной функции:</ProtocolDescriptionMain>
                    <ProtocolDescriptionSubtitle>Нарушения тонуса:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Спастичность'
                                name='game_ant_battle.disturbances_in_tone'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Гипотония'
                                name='game_ant_battle.disturbances_in_tone'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Дистония'
                                name='game_ant_battle.disturbances_in_tone'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Снижение силы'
                                name='game_ant_battle.decrease_in_strength'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Нарушения координации движения (атаксия)'
                                name='game_ant_battle.impaired_coordination_of_movement_ataxia'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Нарушения согласованности действий рук'
                                name='game_ant_battle.hand_coordination_crashes'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Трудности моторного переключения'
                                name='game_ant_battle.motor_shifting_difficulties'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Нарушения отдельных аспектов сенсомоторной
                        функции:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Нарушения схемы тела'
                                name='game_ant_battle.body_schema_disorders'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Нарушения зрительно-моторной координации'
                                name='game_ant_battle.disorders_of_hand_eye_coordination'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Содружественные движения (синкинезии):</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Оролингвальные'
                                name='game_ant_battle.orolingual'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Оптолингвальные'
                                name='game_ant_battle.opto_lingual'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Моторные функции кистей и пальцев рук:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Пальцевый праксис сформирован. Воспроизвел пальцевую позу без затруднений'
                                value='пальцевый праксис сформирован. без затруднений'
                                name='game_ant_battle.motor_functions_of_hands_and_fingers'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Пальцевый праксис сформирован. Воспроизвел пальцевую позу с затруднениями'
                                value='пальцевый праксис сформирован. с затруднениями'
                                name='game_ant_battle.motor_functions_of_hands_and_fingers'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Пальцевый праксис не сформирован. Пальцевую позу не воспроизвел'
                                value='пальцевый праксис сформирован не воспроизвел'
                                name='game_ant_battle.motor_functions_of_hands_and_fingers'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolTitle>Строение артикуляционного аппарата</ProtocolTitle>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Губы:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Тонкие'
                                value='тонкие губы'
                                name='game_ant_battle.lips'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Полные'
                                value='полные губы'
                                name='game_ant_battle.lips'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Несмыкание губ'
                                name='game_ant_battle.non_closure_of_lips'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionMain>Зубо-челюстные аномалии:</ProtocolDescriptionMain>
                    <ProtocolDescriptionSubtitle>Нарушения прикуса:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Прогнатия'
                                name='game_ant_battle.malocclusion'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Прогения'
                                name='game_ant_battle.malocclusion'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Глубокий прикус'
                                name='game_ant_battle.malocclusion'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Открытый прикус'
                                name='game_ant_battle.malocclusion'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Перекрестный прикус'
                                name='game_ant_battle.malocclusion'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Неправильное положение зубов:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Адентия'
                                name='game_ant_battle.incorrect_position_of_teeth'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Диастема'
                                name='game_ant_battle.incorrect_position_of_teeth'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Сверхкомплектные зубы'
                                name='game_ant_battle.incorrect_position_of_teeth'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Изменение формы зубов:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Макродентия'
                                name='game_ant_battle.tooth_reshaping'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Микродентия'
                                name='game_ant_battle.tooth_reshaping'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionMain>Аномалии языка:</ProtocolDescriptionMain>
                    <ProtocolDescriptionSubtitle>Изменение размера языка:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Макроглоссия'
                                name='game_ant_battle.changing_size_of_tongue'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Микроглоссия'
                                name='game_ant_battle.changing_size_of_tongue'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Девиация языка:</ProtocolDescriptionSubtitle>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Влево'
                            name='game_ant_battle.deviation_of_tongue'
                            control={control}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Вправо'
                            name='game_ant_battle.deviation_of_tongue'
                            control={control}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Раздвоение языка'
                                name='game_ant_battle.split_tongue'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Укороченная подъязычная складка'
                                name='game_ant_battle.shortened_hyoid_fold'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Аномалии уздечек верхней/нижней губы</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Укорочение'
                                name='game_ant_battle.anomalies_of_frenum_of_upper_lower_lip'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Увеличение'
                                name='game_ant_battle.anomalies_of_frenum_of_upper_lower_lip'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionMain>Пороки развития челюстно-лицевой области и системные аномалии мягких тканей и
                        костей лица:</ProtocolDescriptionMain>
                    <ProtocolDescriptionSubtitle>Расщелина:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Губы'
                                name='game_ant_battle.cleft'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Твердого и мягкого нёба'
                                name='game_ant_battle.cleft'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Альвеолярного отростка нёба'
                                name='game_ant_battle.cleft'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Скрытая'
                                name='game_ant_battle.cleft'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Готическое нёбо'
                                name='game_ant_battle.gothic_palate'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Деформации челюсти'
                                name='game_ant_battle.jaw_deformities'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
            </ProtocolBlock>
        </>
    );
};

export default AntBattleGame;