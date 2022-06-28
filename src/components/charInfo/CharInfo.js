import loki from '../../resources/loki.png';

import './charInfo.scss';

const CharInfo = () => {
    return (
        <div className="charInfo">
            <div className="charInfo__header">
                <img className="charInfo__header_img" src={loki} alt="Loki" />
                <div className="charInfo__header_inner">
                    <h3 className="charInfo__header_name">Loki</h3>
                    <div className="charInfo__header_btns">
                        <a className="btn btn__main" href="#">
                            <div className="inner">Homepage</div>
                        </a>
                        <a className="btn btn__secondary" href="#">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <p className="charInfo__descr">
                In Norse mythology, Loki is a god or jötunn (or both).
                Loki is the son of Fárbauti and Laufey, and the brother
                of Helblindi and Býleistr. By the jötunn Angrboða, Loki
                is the father of Hel, the wolf Fenrir, and the world
                serpent Jörmungandr. By Sigyn, Loki is the father of
                Nari and/or Narfi and with the stallion Svaðilfari as
                the father, Loki gave birth—in the form of a mare—to the
                eight-legged horse Sleipnir. In addition, Loki is
                referred to as the father of Váli in the Prose Edda.
            </p>
            <div className="charInfo__comics">
                <h3 className="charInfo__comics_title">Comics:</h3>
                <ul className="charInfo__comicsItems">
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                All-Winners Squad: Band of Heroes (2011) #3
                            </div>
                        </div>
                    </li>
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                Alpha Flight (1983) #50
                            </div>
                        </div>
                    </li>
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                Amazing Spider-Man (1999) #503
                            </div>
                        </div>
                    </li>
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                Amazing Spider-Man (1999) #504
                            </div>
                        </div>
                    </li>
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                            </div>
                        </div>
                    </li>
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                            </div>
                        </div>
                    </li>
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                            </div>
                        </div>
                    </li>
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                Vengeance (2011) #4
                            </div>
                        </div>
                    </li>
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                Avengers (1963) #1
                            </div>
                        </div>
                    </li>
                    <li className="charInfo__comicsItem">
                        <div className="charInfo__comicsItem_inner">
                            <div className="charInfo__comicsItem_name">
                                Avengers (1996) #1
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CharInfo;