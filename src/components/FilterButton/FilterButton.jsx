import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styleForm } from './FilterButton.styled';

export default function Filter({ handleChange, selectFilter }) {
  return (
    <FormControl sx={styleForm.formControl}>
      <InputLabel id="select-filter" sx={styleForm.filter}>
        Filter
      </InputLabel>
      <Select
        labelId="select-filter"
        id="select-filter"
        value={selectFilter}
        label="Filter"
        onChange={handleChange}
        sx={styleForm.input}
      >
        <MenuItem value="showAll" sx={styleForm.menu}>
          Show all
        </MenuItem>
        <MenuItem value="follow" sx={styleForm.menu}>
          Follow
        </MenuItem>
        <MenuItem value="following" sx={styleForm.menu}>
          Following
        </MenuItem>
      </Select>
    </FormControl>
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectFilter: PropTypes.string.isRequired,
};
