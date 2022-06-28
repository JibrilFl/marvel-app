import loki from '../../resources/loki.png';

import './charWiki.scss';

const CharWiki = () => {
    return (
        <div className="charWiki">
            <img className="charWiki__img" src={loki} alt="Loki" />
            <div className="charWiki__inner">
                <h3 className="charWiki__name">Loki</h3>
                <p className="charWiki__descr">
                    In Norse mythology, Loki is a god or jötunn (or both).
                    Loki is the son of Fárbauti and Laufey, and the brother of
                    Helblindi and Býleistr. By the jötunn Angrboða, Loki is the
                    father of Hel, the wolf Fenrir, and the world serpent
                    Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi
                    and with the stallion Svaðilfari as the father, Loki gave
                    birth—in the form of a mare—to the eight-legged horse Sleipnir.
                    In addition, Loki is referred to as the father of Váli in the
                    Prose Edda.
                </p>
            </div>
        </div>
    )
}

export default CharWiki;