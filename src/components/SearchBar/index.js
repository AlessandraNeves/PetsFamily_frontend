import './style.css';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBar({ placeholder, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
        setSearchTerm('');
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    sx={{
                        width: '180px',
                        '& .MuiInput-underline:before': {
                            borderBottomColor: '#3D6B42', 
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: '#3D6B42',
                        },
                        '& .MuiInputLabel-root': {
                            color: '#3D6B42', 
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#3D6B42', 
                        },
                    }}
                    id="input-with-sx"
                    label={placeholder}
                    variant="standard"
                    value={searchTerm}
                    onChange={handleInputChange}
                    InputProps={{
                        style: { color: '#3D6B42' }, 
                    }}
                />
                <SearchIcon
                    sx={{ color: '#3D6B42', mr: 1, my: 0.5, cursor: 'pointer' }}
                    onClick={handleSearchClick}
                />
            </Box>
        </div>
    );
}
