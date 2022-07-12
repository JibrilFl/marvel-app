import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singleComicPage.scss';

const SingleComicPage = () => {
    const { comicId } = useParams();
    const [comic, setComic] = useState(null);

    const { loading, error, getComic, clearError } = useMarvelService();

    useEffect(() => {
        updateComic();
    }, [comicId]);

    const updateComic = () => {
        clearError();

        getComic(comicId)
            .then(onComicLoaded)
    }

    const onComicLoaded = (newComic) => {
        setComic(comic => newComic);
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({ comic }) => {
    const { name, description, thumbnail, page, language, price } = comic;

    const navigate = useNavigate();

    let style = { objectFit: 'cover' };
    if (thumbnail.indexOf('image_not') > -1) {
        style.objectFit = 'fill'
    }

    return (
        <div className="comicInfo">
            <img className="comicInfo__img" src={thumbnail} alt={name} style={style} />
            <div className="comicInfo__inner">
                <h3 className="comicInfo__title">{name}</h3>

                <p className="comicInfo__descr">{description}</p>
                <p className="comicInfo__pages">{page}</p>
                <p className="comicInfo__lang">Language: {language}</p>
                <p className="comicInfo__price">{price}</p>
            </div>
            <a className="comicInfo__link" onClick={() => navigate(-1)} style={{ 'cursor': 'pointer', 'height': '100%' }}>Back to all</a>
        </div >
    )
}

export default SingleComicPage;