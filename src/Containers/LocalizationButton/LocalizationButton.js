import React from 'react';
import i18n from 'i18next';

import { FormControl, Grid, NativeSelect } from '@mui/material';

import 'Containers/LocalizationButton/LocalizationButton.css';


const languages = [
    {
        name: 'Рус',
        code: 'ru',
        country_code: 'ru',
    },
    {
        name: 'Eng',
        code: 'en',
        country_code: 'gb',
    },
]

const LocalizationButton = () => {

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <Grid style={{ position: 'absolute', right: 0, paddingRight: 20, paddingTop: 20, zIndex: 100 }}>
            <FormControl fullWidth>
                <NativeSelect
                    onChange={handleChange}
                    className='option__field'
                >
                    {languages.map((l) => (
                        <option value={l.code}>{l.name}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </Grid>

    );
};

export default LocalizationButton;