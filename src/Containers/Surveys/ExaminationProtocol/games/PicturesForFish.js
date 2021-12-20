import React from 'react';
import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock.js';
import ProtocolPlaceholderTitle
    from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle.js';
import PropTypes from 'prop-types';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle.js';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow.js';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField.js';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle.js';
import ProtocolDescriptionSubtitle
    from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock.js';
import ProtocolResultWrapper
    from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper.js';

const PicturesForFish = (props) => {

    const  {
        register, errors, control
    } = props

    return (
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
                </ProtocolResultBlock>
            </ProtocolRow>
        </ProtocolBlock>
    );
}

PicturesForFish.propTypes = {
    register: PropTypes.func.isRequired,
    control: PropTypes.object,
    errors: PropTypes.object.isRequired,
}

export default PicturesForFish;