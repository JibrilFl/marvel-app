import ultimate from '../../resources/comic-ultimate-war.png';
import future from '../../resources/comic-days-of-future-past.png';

import './comicList.scss';

const ComicList = () => {
    return (
        <div className="comicList">
            <div className="comicList__items">
                <div className="comicList__item">
                    <img className="comicList__item_img" src={ultimate} alt="Ultimate war" />
                    <h3 className="comicList__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <div className="comicList__item_price">9.99$</div>
                </div>
                <div className="comicList__item">
                    <img className="comicList__item_img" src={future} alt="Days of Future Past" />
                    <h3 className="comicList__item_name">X-Men: Days of Future Past</h3>
                    <div className="comicList__item_price">NOT AVAILABLE</div>
                </div>
                <div className="comicList__item">
                    <img className="comicList__item_img" src={ultimate} alt="Ultimate war" />
                    <h3 className="comicList__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <div className="comicList__item_price">9.99$</div>
                </div>
                <div className="comicList__item">
                    <img className="comicList__item_img" src={future} alt="Days of Future Past" />
                    <h3 className="comicList__item_name">X-Men: Days of Future Past</h3>
                    <div className="comicList__item_price">9.99$</div>
                </div>
                <div className="comicList__item">
                    <img className="comicList__item_img" src={ultimate} alt="Ultimate war" />
                    <h3 className="comicList__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <div className="comicList__item_price">9.99$</div>
                </div>
                <div className="comicList__item">
                    <img className="comicList__item_img" src={future} alt="Days of Future Past" />
                    <h3 className="comicList__item_name">X-Men: Days of Future Past</h3>
                    <div className="comicList__item_price">NOT AVAILABLE</div>
                </div>
                <div className="comicList__item">
                    <img className="comicList__item_img" src={ultimate} alt="Ultimate war" />
                    <h3 className="comicList__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
                    <div className="comicList__item_price">9.99$</div>
                </div>
                <div className="comicList__item">
                    <img className="comicList__item_img" src={future} alt="Days of Future Past" />
                    <h3 className="comicList__item_name">X-Men: Days of Future Past</h3>
                    <div className="comicList__item_price">9.99$</div>
                </div>
            </div>
            <a className="btn btn__main btn__long" href="#">
                <div className="inner">Load more</div>
            </a>
        </div>
    )
}

export default ComicList;