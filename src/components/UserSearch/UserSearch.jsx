import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import styles from './UserSearch.module.css';

// searchbox styling
const SearchBox = styled(TextField)(() => ({
  width: '100%',
  '& fieldset': {
    borderRadius: '25px',
    backgroundColor: '#FAFAFC',
    zIndex: -1,
  },

  '& .MuiInputBase-input': {
    width: '100%',
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

/**
 * This component takes in a function as a prop that should handle the behaviour of a user clicking on the search icon.
 *
 */
export default function UserSearch({ submitSearch }) {
  const [searchInput, setSearchInput] = React.useState('');

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchInput(searchValue);
  };

  const handleSubmit = () => {
    if (searchInput === '') {
      return;
    }
    submitSearch(searchInput);
  };

  return (
    <Box className={styles.root} component="form" noValidate autoComplete="off">
      <SearchBox
        id="outlined-basic"
        variant="outlined"
        placeholder="Type a name"
        onChange={handleSearch}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon data-testid="searchIcon" onClick={handleSubmit} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
