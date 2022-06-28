import avengers from '../../resources/avengers.png';
import logo from '../../resources/avengers-logo.png';

import './appBanner.scss';

const AppBanner = () => {
    return (
        <div className="appBanner">
            <img className="appBanner__img" src={avengers} alt="Avengers" />
            <h2 className="appBanner__title">
                New comics every week! <br />
                Stay tuned!
            </h2>
            <img className="appBanner__logo" src={logo} alt="Avengers logo" />
        </div>
    )
}

export default AppBanner;