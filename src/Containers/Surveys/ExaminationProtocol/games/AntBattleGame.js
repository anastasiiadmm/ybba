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

const AntBattleGame = (props) => {

    const  {
        register, errors, control
    } = props

    return (
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
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Лопаточка'
                        name='game_ant_battle.spatula'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Иголка'
                        name='game_ant_battle.needle'
                        register={register}
                        errors={errors}
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
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Качели'
                        name='game_ant_battle.swing'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
            </ProtocolBox>
            <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
            <ProtocolRow>
                <ProtocolDescriptionSubtitle>Тонус:</ProtocolDescriptionSubtitle>
                <ProtocolResultBlock>
                    <ProtocolFormField
                        type='radio'
                        label='Cпастичность мышц языка'
                        name='game_ant_battle.tone'
                        control={control}
                        errors={errors}
                    />
                </ProtocolResultBlock>
                <ProtocolResultBlock>
                    <ProtocolFormField
                        type='radio'
                        label='Гипотония мышц языка'
                        name='game_ant_battle.tone'
                        control={control}
                        errors={errors}
                    />
                </ProtocolResultBlock>
                <ProtocolResultBlock>
                    <ProtocolFormField
                        type='radio'
                        label='Дистония мышц языка'
                        name='game_ant_battle.tone'
                        control={control}
                        errors={errors}
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
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Гиперкинезы языка'
                            name='game_ant_battle.hyperkinesis_of_the_tongue'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Тремор языка'
                            name='game_ant_battle.tremor_of_the_tongue'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Трудности переключения'
                            name='game_ant_battle.switching_difficulties'
                            control={control}
                            errors={errors}
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
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Ускоренный темп выполнения движений'
                            name='game_ant_battle.pace_of_the_movements'
                            control={control}
                            errors={errors}
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
    );
};

export default AntBattleGame;