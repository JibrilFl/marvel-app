import future from '../../resources/comic-days-of-future-past.png';

import './comicInfo.scss';

const ComicInfo = () => {
    return (
        <div className="comicInfo">
            <img className="comicInfo__img" src={future} alt="Days 0f future" />
            <div className="comicInfo__inner">
                <h3 className="comicInfo__title">X-Men: Days of Future Past</h3>

                <p className="comicInfo__descr">
                    Re-live the legendary first journey into the dystopian future of 2013 - where
                    Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they
                    die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo,
                    the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                </p>
                <div className="comicInfo__pages">
                    144 pages
                </div>
                <div className="comicInfo__lang">
                    Language: en-us
                </div>
                <div className="comicInfo__price">
                    9.99$
                </div>
            </div>
            <a className="comicInfo__link" href="#">Back to all</a>
        </div>
    )
}

export default ComicInfo;