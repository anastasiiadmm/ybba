import React from 'react';

import PropTypes from 'prop-types';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock.js';
import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle.js';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle.js';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow.js';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField.js';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle.js';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock.js';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper.js';

const PicturesForFish = (props) => {

    const  {
        register, errors, control, isConclusionDisabled
    } = props

    return <>
        <ProtocolBlock>
            <ProtocolPlaceholderTitle>Игра “Картинки для рыбки”</ProtocolPlaceholderTitle>
            <ProtocolBlockTitle>Звукопроизношение <span>Звуки С, Сь, З, Зь, Ц, Ч, Щ, Ж, Ш</span></ProtocolBlockTitle>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Магазин-Сено-Василек /ЗЬ, СЬ'
                    name='game_pictures_for_fish.shop_hay_cornflower'
                    register={register}
                    errors={errors}
                />
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Собака-Насос-Замок-Коза /С, З'
                    name='game_pictures_for_fish.dog_pump_lock_goat'
                    register={register}
                    errors={errors}
                />
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Скворец-Цапля-Палец /С – Ц, Ц'
                    name='game_pictures_for_fish.starling_heron_finger'
                    register={register}
                    errors={errors}
                />
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Сыщик-Щипцы-Чеснок /С – Щ, Щ – Ц, Ч - С'
                    name='game_pictures_for_fish.detective_tongs_garlic'
                    register={register}
                    errors={errors}
                />
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Щука-Вещи-Лещ /Щ'
                    name='game_pictures_for_fish.pike_things_bream'
                    register={register}
                    errors={errors}
                />
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Жук-Сажа-Ножницы /Ж, С – Ж, Ж - Ц'
                    name='game_pictures_for_fish.beetle_soot_scissors'
                    register={register}
                    errors={errors}
                />
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Шуба-Кошка-Камыш-Веснушки /Ш, С - Ш'
                    name='game_pictures_for_fish.fur_coat_cat_reed_freckles'
                    register={register}
                    errors={errors}
                />
            </ProtocolRow>
            <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
            <ProtocolRow>
                <ProtocolDescriptionSubtitle>Свистящие:</ProtocolDescriptionSubtitle>
                <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Парасигматизм свистящих'
                            name='game_pictures_for_fish.sibilant_parasigmatism'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена С на'
                            name='game_pictures_for_fish.replacing_s_with'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Сь на'
                            name='game_pictures_for_fish.replacing_s_soft_with'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена З на'
                            name='game_pictures_for_fish.replacing_z_with'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Зь на'
                            name='game_pictures_for_fish.replacing_z_soft_with'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Ц на'
                            name='game_pictures_for_fish.replacing_c_with'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Ч на'
                            name='game_pictures_for_fish.replacing_ch_with'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Призубный сигматизм'
                            name='game_pictures_for_fish.prominent_sigmatism'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Носовой сигматизм'
                            name='game_pictures_for_fish.nasal_sigmatism'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Шипящий сигматизм'
                            name='game_pictures_for_fish.hissing_sigmatism'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Боковой сигматизм'
                            name='game_pictures_for_fish.lateral_sigmatism'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Губно-зубное произношение свистящих'
                            name='game_pictures_for_fish.labiodental_pronunciation_of_whistling'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Пропуск свистящего звука'
                            name='game_pictures_for_fish.skip_whistling_sound'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Смешение звуков'
                            name='game_pictures_for_fish.mixing_sounds'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Межзубный сигматизм'
                            name='game_pictures_for_fish.interdental_sigmatism'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                </ProtocolResultBlock>
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolDescriptionSubtitle>Шипящие:</ProtocolDescriptionSubtitle>
                <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Щ на'
                            name='game_pictures_for_fish.replacing_shch_to'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Ж на'
                            name='game_pictures_for_fish.replacing_zh_to'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Ш на'
                            name='game_pictures_for_fish.replacing_sh_to'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Призубный сигматизм'
                            name='game_pictures_for_fish.pristine_sigmatism'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Носовой сигматизм'
                            name='game_pictures_for_fish.hissing_nasal_sigmatism'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Шипящий сигматизм'
                            name='game_pictures_for_fish.hissing_sigmatism_two'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Боковой сигматизм'
                            name='game_pictures_for_fish.lateral_sigmatism_two'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Губно-зубное произношение шипящих'
                            name='game_pictures_for_fish.labiodental_pronunciation_of_sibilants'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Пропуск шипящего звука'
                            name='game_pictures_for_fish.skip_whistling_sound_two'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Смешение звуков'
                            name='game_pictures_for_fish.mixing_sounds_two'
                            control={control}
                            errors={errors}
                        />
                    </ProtocolResultWrapper>
                </ProtocolResultBlock>
            </ProtocolRow>
        </ProtocolBlock>
        <ProtocolBlock>
            <ProtocolBlockTitle>Психологическая база речи. Память</ProtocolBlockTitle>
            <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
            <ProtocolRow>
                <ProtocolDescriptionSubtitle>Объем вербальной памяти:</ProtocolDescriptionSubtitle>
                <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Достаточный для полноценной коммуникации'
                            name='game_pictures_for_fish.verbal_memory'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Недостаточный для полноценной коммуникации'
                            name='game_pictures_for_fish.verbal_memory'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled}
                        />
                    </ProtocolResultWrapper>
                </ProtocolResultBlock>
                <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Наблюдаются незначительные трудности актуализации слов, хранения и воспроизведения вербальной информации'
                            name='game_pictures_for_fish.verbal_memory_part_two'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Наблюдаются выраженные трудности актуализации слов, хранения и воспроизведения вербальной информации'
                            name='game_pictures_for_fish.verbal_memory_part_two'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled}
                        />
                    </ProtocolResultWrapper>
                </ProtocolResultBlock>
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolFormField
                    type='textarea'
                    label='Комментарий'
                    name='game_pictures_for_fish.expert_comment'
                    placeholder='Комментарий специалиста'
                    register={register}
                />
            </ProtocolRow>
        </ProtocolBlock>
    </>;
}

PicturesForFish.propTypes = {
    register: PropTypes.func.isRequired,
    control: PropTypes.object,
    errors: PropTypes.object.isRequired,
    isConclusionDisabled: PropTypes.bool
}

export default PicturesForFish;