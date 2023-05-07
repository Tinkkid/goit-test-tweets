import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter({ handleChange, selectUsers }) {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel id="select-filter">Filter</InputLabel>
      <Select
        labelId="select-filter"
        id="select-filter"
        value={selectUsers}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value={10}>Show all</MenuItem>
        <MenuItem value={20}>Follow</MenuItem>
        <MenuItem value={30}>Following</MenuItem>
      </Select>
    </FormControl>
  );
}
