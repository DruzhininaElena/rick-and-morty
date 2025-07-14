import {AppBar, Container, LinearProgress, Toolbar} from '@mui/material'
import {useAppSelector} from '@/common/hooks';
import {selectStatus} from '@/app/app-slice.ts';
import {Link} from 'react-router';
import {Path} from '@/common/routing/Routing.tsx';
import logo from '@/assets/images/logo.png'
import {containerSx} from '@/common/components/Header/Header.style.ts';
import s from './Header.module.css'
import {NavBar} from '@/common/components/NavBar/NavBar.tsx';

export const Header = () => {

    const status = useAppSelector(selectStatus)

    return (
        <AppBar position="relative" color="transparent" elevation={0}>
            <Toolbar>
                <Container maxWidth={'lg'} sx={containerSx}>
                    <Link to={Path.Characters}>
                        <img className={s.logo} src={logo} alt="logo"/>
                    </Link>
                    <NavBar/>
                </Container>
            </Toolbar>
            {status === 'loading' && (
                <LinearProgress
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        zIndex: 99
                    }}
                />
            )}
        </AppBar>
    )
}
