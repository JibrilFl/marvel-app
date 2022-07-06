import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar();
    }, [props.charId]);

    const updateChar = () => {
        const { charId } = props;

        if (!charId) {
            return;
        }

        onCharLoading();

        marvelService
            .getCharacter(charId)
            .then(onCharLoaded)
            .catch(onError)
    }

    const onCharLoaded = (newChar) => {
        setChar(char => newChar);
        setLoading(loading => false);
    }

    const onError = () => {
        setLoading(loading => false);
        setError(error => true);
    }

    const onCharLoading = () => {
        setLoading(loading => true);
    }

    const skeleton = char || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="charInfo">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )

}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;

    let styleImg = { objectFit: 'cover' };
    if (thumbnail.indexOf('image_not') > -1) {
        styleImg.objectFit = 'contain'
    }

    const comicsList = comics.filter((item, i) => i < 10);

    return (
        <>
            <div className="charInfo__header">
                <img className="charInfo__header_img" src={thumbnail} alt={name} style={styleImg} />
                <div className="charInfo__header_inner">
                    <h3 className="charInfo__header_name">{name}</h3>
                    <div className="charInfo__header_btns">
                        <a className="btn btn__main" href={homepage} >
                            <div className="inner">Homepage</div>
                        </a>
                        <a className="btn btn__secondary" href={wiki} >
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <p className="charInfo__descr">{description}</p>
            <div className="charInfo__comics">
                <h3 className="charInfo__comics_title">Comics:</h3>
                <ul className="charInfo__comicsItems">
                    {comicsList.length > 0 ? null : 'There is no comics with character'}
                    {
                        comicsList.map((item, i) => {
                            return (
                                <li className="charInfo__comicsItem" key={i}>
                                    <div className="charInfo__comicsItem_inner">
                                        <div className="charInfo__comicsItem_name">
                                            {item.name}
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;