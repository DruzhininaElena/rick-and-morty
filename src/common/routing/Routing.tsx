import {Route, Routes} from 'react-router'
import {PageNotFound} from '../components/PageNotFound/PageNotFound.tsx';
import {Planets} from '@/features/planets/ui/Planets.tsx';
import {Characters} from '@/features/characters/ui/Characters/Characters.tsx';
import {Locations} from '@/features/locations/Locations.tsx';

export const Path = {
    Characters: '/',
    Planets: '/planets',
    Locations: '/locations',
    NotFound: '*',
} as const

export const Routing = () => {

    return (
        <Routes>
            <Route path={Path.Characters} element={<Characters/>}/>
            <Route path={Path.Planets} element={<Planets/>}/>
            <Route path={Path.Locations} element={<Locations/>}/>
            <Route path={Path.NotFound} element={<PageNotFound/>}/>
        </Routes>
    )
}
