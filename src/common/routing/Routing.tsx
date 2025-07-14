import {Route, Routes} from 'react-router'
import {PageNotFound} from '../components/PageNotFound/PageNotFound.tsx';
import {Planets} from '@/features/planets/ui/Planets/Planets.tsx';
import {Characters} from '@/features/characters/ui/Characters/Characters.tsx';
import {Planet} from '@/features/planets/ui/Planets/Planet/Planet.tsx';

export const Path = {
    Characters: '/',
    Planets: '/planets',
    NotFound: '*',
} as const

export const Routing = () => {

    return (
        <Routes>
            <Route path={Path.Characters} element={<Characters/>}/>
            <Route path={Path.Planets}>
                <Route index element={<Planets/>}/>
                <Route path={':id'} element={<Planet/>}/>
            </Route>
            <Route path={Path.NotFound} element={<PageNotFound/>}/>
        </Routes>
    )
}
