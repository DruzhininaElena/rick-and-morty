import {Link} from 'react-router';
import {Path} from '@/common/routing/Routing.tsx';
import s from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav>
            <ul className={s.list}>
                <li>
                    <Link to={Path.Characters}>Characters</Link>
                </li>
                <li>
                    <Link to={Path.Planets}>Planets</Link>
                </li>
                <li>
                    <Link to={Path.Episodes}>Episodes</Link>
                </li>
            </ul>
        </nav>
    );
};