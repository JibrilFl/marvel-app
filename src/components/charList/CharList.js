import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1544);
    const [charEnded, setCharEnded] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const onCharListLoading = () => {
        setNewItemLoading(true);
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const onError = () => {
        setError(error => true);
        setLoading(loading => false);
    }

    const charRefs = useRef([]);

    const onFocusChar = (id) => {
        charRefs.current.forEach(item => item.classList.remove('active'));
        charRefs.current[id].classList.add('active');
        charRefs.current[id].focus();
    }

    function renderCharacters(arr) {
        const items = arr.map((item, i) => {
            const { id, name, thumbnail } = item;

            let styleImg = { objectFit: 'cover' };
            if (thumbnail.indexOf('image_not') > -1) {
                styleImg.objectFit = 'contain'
            }

            return (
                <div
                    className='charList__item'
                    ref={el => charRefs.current[i] = el}
                    key={id}
                    tabIndex={0}
                    onClick={() => {
                        props.onCharSelected(id);
                        onFocusChar(i)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            props.onCharSelected(id);
                            onFocusChar(i);
                        }
                    }} >
                    <img className="charList__item_img" src={thumbnail} alt={name} style={styleImg} />
                    <h3 className="charList__item_name">{name}</h3>
                </div>
            )
        });

        return (
            <div className="charList__grid">
                {items}
            </div>
        )
    }

    const items = renderCharacters(charList);

    const content = !(loading || error) ? items : null;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;

    return (
        <div className="charList">
            {content}
            {spinner}
            {errorMessage}
            <button
                className="btn btn__long btn__main"
                disabled={newItemLoading}
                style={{ 'display': charEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)} >
                <div className="inner">Load more</div>
            </button>
        </div>
    )

}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;