import './App.css'
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import {Header} from '@/common/components/Header/Header.tsx';
import {Routing} from '@/common/routing';
import {ErrorSnackbar} from '@/common/components/ErrorSnackbar/ErrorSnackbar.tsx';
import {getTheme} from '@/common/theme';

function App() {

    const theme = getTheme()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Container maxWidth={'lg'}>
                <Routing/>
            </Container>
            <ErrorSnackbar/>
        </ThemeProvider>
    )
}

export default App
