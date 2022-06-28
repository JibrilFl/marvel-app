import abyss from '../../resources/abyss.png';
import loki from '../../resources/loki.png';
import adam from '../../resources/adam-warlock.png';
import boom from '../../resources/boom-boom.png';
import calypso from '../../resources/calypso.png';
import colleen from '../../resources/colleen-wing.png';
import diamon from '../../resources/diamon-hellstorm.png';
import damage from '../../resources/damage-control.png';
import hulk from '../../resources/hulk.png';

import './charList.scss';

const CharList = () => {
    return (
        <div className="charList">
            <div className="charList__grid">
                <div className="charList__item">
                    <img className="charList__item_img" src={abyss} alt="Abyss" />
                    <h3 className="charList__item_name">Abyss</h3>
                </div>
                <div className="charList__item">
                    <img className="charList__item_img" src={loki} alt="Loki" />
                    <h3 className="charList__item_name">Loki</h3>
                </div>
                <div className="charList__item">
                    <img className="charList__item_img" src={adam} alt="Adam Warlock" />
                    <h3 className="charList__item_name">Adam Warlock</h3>
                </div>
                <div className="charList__item">
                    <img className="charList__item_img" src={boom} alt="Boom Boom" />
                    <h3 className="charList__item_name">Boom Boom</h3>
                </div>
                <div className="charList__item">
                    <img className="charList__item_img" src={calypso} alt="Calypso" />
                    <h3 className="charList__item_name">Calypso</h3>
                </div>
                <div className="charList__item">
                    <img className="charList__item_img" src={colleen} alt="Colleen Wing" />
                    <h3 className="charList__item_name">Colleen Wing</h3>
                </div>
                <div className="charList__item">
                    <img className="charList__item_img" src={diamon} alt="Daimon Hellstrom" />
                    <h3 className="charList__item_name">Daimon Hellstrom</h3>
                </div>
                <div className="charList__item">
                    <img className="charList__item_img" src={damage} alt="Damage Control" />
                    <h3 className="charList__item_name">Damage Control</h3>
                </div>
                <div className="charList__item">
                    <img className="charList__item_img" src={hulk} alt="Hulk" />
                    <h3 className="charList__item_name">Hulk</h3>
                </div>
            </div>
            <a className="btn btn__long btn__main" href="#">
                <div className="inner">Load more</div>
            </a>
        </div>
    )
}

export default CharList;