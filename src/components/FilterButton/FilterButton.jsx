import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter({ handleChange, selectFilter }) {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel id="select-filter">Filter</InputLabel>
      <Select
        labelId="select-filter"
        id="select-filter"
        value={selectFilter}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value="showAll">Show all</MenuItem>
        <MenuItem value="follow">Follow</MenuItem>
        <MenuItem value="following">Following</MenuItem>
      </Select>
    </FormControl>
  );
}
