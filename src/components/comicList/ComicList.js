import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicList.scss';

const ComicList = () => {

    const [comicList, setComicList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicEnded, setComicEnded] = useState(false);

    const { loading, error, getAllComics } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicListLoaded)
    }

    const onComicListLoaded = (newComicList) => {
        let ended = false;
        if (newComicList.length < 8) {
            ended = true;
        }

        setComicList(comicList => [...comicList, ...newComicList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setComicEnded(comicEnded => ended);
    }

    function renderComics(arr) {
        const items = arr.map((item, i) => {
            const { id, name, thumbnail, price } = item;

            let style = { objectFit: 'cover' };
            if (thumbnail.indexOf('image_not') > -1) {
                style.objectFit = 'fill'
            }

            return (
                <li
                    className="comicList__item"
                    key={i}>
                    <Link to={`/comics/${id}`}>
                        <img className="comicList__item_img" src={thumbnail} style={style} alt="Days of Future Past" />
                        <h3 className="comicList__item_name">{name}</h3>
                        <div className="comicList__item_price">{price}</div>
                    </Link>
                </li>
            )
        });

        return (
            <ul className="comicList__items">
                {items}
            </ul>
        )
    }

    const items = renderComics(comicList);

    const spinner = loading && !newItemLoading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;

    return (
        <div className="comicList">
            {items}
            {spinner}
            {errorMessage}
            <button
                className="btn btn__long btn__main"
                disabled={newItemLoading}
                style={{ 'display': comicEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)} >
                <div className="inner">Load more</div>
            </button>
        </div>
    )
}

export default ComicList;