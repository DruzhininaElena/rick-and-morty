import {useMediaQuery, useTheme} from '@mui/system';

export const useBreakpoints = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('sm'));
}