import { Box, IconButton, InputBase, Paper } from '@mui/material';
import { SearchIcon } from '@/assets/icons/SearchIcon.tsx';
import { type ChangeEvent, useState, type KeyboardEvent } from 'react';

type Props = {
    showSearchResult: (searchQuery: string) => void;
};

export const SearchBar = ({ showSearchResult }: Props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSearch = () => {
        const trimmedQuery = searchQuery.trim();
        if (trimmedQuery.length >= 3) {
            setSearchQuery('');
            showSearchResult(trimmedQuery);
        } else {
            setError('Введите минимум 3 символа');
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setError(null);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, position: 'relative' }}
        >
            <InputBase
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search by name"
                inputProps={{ 'aria-label': 'Search by name' }}
                sx={{ ml: 1, flex: 1, width: '500px', color: '#88e23b' }}
            />

            {error && (
                <Box sx={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: 0,
                    fontSize: '0.75rem',
                    color: 'error.main',
                    padding: '0 14px',
                }}>
                    {error}
                </Box>
            )}

            <IconButton
                type="button"
                sx={{ p: '10px' }}
                aria-label="поиск"
                onClick={handleSearch}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};