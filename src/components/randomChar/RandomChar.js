import thor from '../../resources/thor.png';
import mjolnir from '../../resources/shield-and-mjolnir.png';

import './randomChar.scss';

const RandomChar = () => {
    return (
        <div className="container">
            <div className="randomChar">
                <div className="randomChar__info">
                    <img className="randomChar__info_img" src={thor} alt="thor" />
                    <div className="randomChar__info_inner">
                        <div className="randomChar__info_name">THOR</div>
                        <p className="randomChar__info_descr">
                            As the Norse God of thunder and lightning, Thor wields
                            one of the greatest weapons ever made, the enchanted hammer Mjolnir.
                            While others have described Thor as an over-muscled, oafish imbecile,
                            he's quite smart and compassionate...
                        </p>
                        <div className="randomChar__info_btns">
                            <a className="btn btn__main" href="#Homepage">
                                <div className="inner">Homepage</div>
                            </a>
                            <a className="btn btn__secondary" href="#Wiki">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="randomChar__box">
                    <h2 className="randomChar__box_title">
                        Random character for today! <br />
                        Do you want to get to know him better?
                    </h2>
                    <p className="randomChar__box_another">
                        Or choose another one
                    </p>
                    <div className="randomChar__box_btn">
                        <a className="btn btn__main" href="#Homepage">
                            <div className="inner">Try it</div>
                        </a>
                    </div>
                    <img className="randomChar__box_img" src={mjolnir} alt="shield and mjolnir" />
                </div>
            </div>
        </div>
    )
}

export default RandomChar;