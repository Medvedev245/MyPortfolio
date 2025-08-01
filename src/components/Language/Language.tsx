import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelectTextFields: React.FC = () => {
  const [Language, setLanguage] = React.useState('English');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
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
          value={Language}
          label="Language"
          onChange={handleChange}
          sx={{
            fontSize: '1.1rem', // увеличивает размер выбранного текста
          }}
        >
          <MenuItem value={'English'}>English</MenuItem>
          <MenuItem value={'Čeština'}>Čeština</MenuItem>
          <MenuItem value={'Ukrainian'}>Ukrainian</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTextFields;
