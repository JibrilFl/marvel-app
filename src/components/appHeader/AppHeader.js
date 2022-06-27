import './appHeader.scss';

const AppHeader = () => {
    return (
        <div className="container">
            <div className="appHeader">
                <h1 className='appHeader__title'><span>Marvel</span> information portal</h1>
                <ul className="nav">
                    <li className="nav__list">
                        <a className="nav__list-link active" href="Characters">Characters</a>
                    </li>
                    <li className="nav__list">
                        <a className="nav__list-link" href="Comics">Comics</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AppHeader;