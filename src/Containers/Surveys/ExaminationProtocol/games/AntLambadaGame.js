import React from 'react';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';

const AntLambadaGame = (props) => {

    const  {
        register, errors, control
    } = props

    return (
        <>
            <ProtocolBlock>
                <ProtocolPlaceholderTitle>Игра “Муравьиная ламбада”</ProtocolPlaceholderTitle>
                <ProtocolBlockTitle>Звукопроизношение <span>Звуки Д, Дь, Т, Ть, К, Г, Х</span></ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Дом-Дятел /Д, Дь'
                        name='game_ant_lambada.woodpecker_house'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Тапки-Платье /Т, Ть'
                        name='game_ant_lambada.slipper_dress'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Кухня-Хомяк-Гусь /К – Х, Г'
                        name='game_ant_lambada.kitchen_hamster_goose'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Переднеязычные:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Носовой'
                                name='game_ant_lambada.nasal'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Пропуск'
                                name='game_ant_lambada.skip'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Д на'
                                name='game_ant_lambada.replacing_d_with'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Дь на'
                                name='game_ant_lambada.replacing_d_soft_with'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Т на'
                                name='game_ant_lambada.replacing_t_with'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Ть на'
                                name='game_ant_lambada.replacing_t_soft_with'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Заднеязычные:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена К на'
                                name='game_ant_lambada.replacing_k_with'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Г на'
                                name='game_ant_lambada.replacing_g_with'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Х на'
                                name='game_ant_lambada.replacing_kh_with'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Смешение'
                                name='game_ant_lambada.mixing'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Искажение'
                                name='game_ant_lambada.distortion'
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
                        name='game_ant_lambada.expert_comment'
                        placeholder='Комментарий специалиста'
                        register={register}
                    />
                </ProtocolRow>
            </ProtocolBlock>
        </>
    );
};

export default AntLambadaGame;