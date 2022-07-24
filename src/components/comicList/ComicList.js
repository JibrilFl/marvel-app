import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicList.scss';

const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner />;
            break;
        case 'loading':
            return newItemLoading ? <Component /> : <Spinner />;
            break;
        case 'confirmed':
            return <Component />;
            break;
        case 'error':
            return <ErrorMessage />;
            break;
        default:
            throw new Error('Unexpected process state');
    }
}

const ComicList = () => {

    const [comicList, setComicList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicEnded, setComicEnded] = useState(false);

    const { getAllComics, process, setProcess } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicListLoaded)
            .then(() => setProcess('confirmed'))
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

    return (
        <div className="comicList">
            {setContent(process, () => renderComics(comicList), newItemLoading)}
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