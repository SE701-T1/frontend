import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { styled } from '@mui/material/styles';
import styles from './UserSearch.module.css';

const SearchBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '25px',
    backgroundColor: '#FAFAFC',
    zIndex: -1,
  },

  '& .MuiInputBase-input': {
    width: '250px',
    color: 'black',
  },

  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#BFBFBF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#BFBFBF',
    },
  },

}));

export default function UserSearch() {

  const [searchInput, setSearchInput] = React.useState('');

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    console.log(searchInput);
  }

  const handleSearch = () => {
    console.log('search pressed')
  };

  return (
    <Box className={styles.root}
      component="form"
      sx={{
      }}
      noValidate
      autoComplete="off"
    >
      <SearchBox
        id="outlined-basic"
        variant="outlined"
        placeholder="Type a name"
        onChange={(e) => searchItems(e.target.value)}
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon data-testid="searchIcon" onClick={handleSearch}/>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
}
