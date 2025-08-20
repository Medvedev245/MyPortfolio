import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

const SelectTextFields: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language || 'en');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setLanguage(event.target.value as string);
  // };

  const handleChange = (event: SelectChangeEvent) => {
    const newLang = event.target.value as string;
    // console.log(newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang); // сразу переключаем язык
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <div>{t('summary')}</div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ fontSize: '1.1rem' }}>
          Language
        </InputLabel>
        <Select
          MenuProps={{
            disableScrollLock: true,
          }}
          inputProps={{
            sx: {
              paddingY: 1,
              paddingX: 1,
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Language"
          onChange={handleChange}
          sx={{
            fontSize: '1.1rem', // увеличивает размер выбранного текста
          }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="cs">Čeština</MenuItem>
          <MenuItem value="uk">Українська</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTextFields;
