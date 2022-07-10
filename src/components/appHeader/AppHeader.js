import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <div className="container">
            <div className="appHeader">
                <h1 className='appHeader__title'><Link to="/"><span>Marvel</span> information portal</Link></h1>
                <ul className="nav">
                    <li className="nav__list">
                        <NavLink
                            className={({ isActive }) => "nav__list-link" + (isActive ? " active" : "")}
                            to="/"
                            end>Characters</NavLink>
                    </li>
                    <li className="nav__list">
                        <NavLink
                            className={({ isActive }) => "nav__list-link" + (isActive ? " active" : "")}
                            to="/comics"
                            end>Comics</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AppHeader;