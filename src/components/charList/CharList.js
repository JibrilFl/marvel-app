import { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

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

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(444);
    const [charEnded, setCharEnded] = useState(false);

    const { getAllCharacters, process, setProcess } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const charRefs = useRef([]);

    const onFocusChar = (id) => {
        charRefs.current.forEach(item => item.classList.remove('active'));
        charRefs.current[id].classList.add('active');
        charRefs.current[id].focus();
    }

    function renderCharacters(arr) {

        let duration = 500;

        const items = arr.map((item, i) => {
            const { id, name, thumbnail } = item;

            let styleImg = { objectFit: 'cover' };
            if (thumbnail.indexOf('image_not') > -1) {
                styleImg.objectFit = 'fill'
            }

            return (
                <CSSTransition timeout={duration} key={id} classNames='charList__item'>
                    {state => (
                        <div
                            className='charList__item'
                            ref={el => charRefs.current[i] = el}
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
                            }}>
                            <img className="charList__item_img" src={thumbnail} alt={name} style={styleImg} />
                            <h3 className="charList__item_name">{name}</h3>
                        </div>
                    )}
                </CSSTransition>
            )
        });

        return (
            <div className="charList__grid">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </div>
        )
    }

    return (
        <div className="charList">
            {setContent(process, () => renderCharacters(charList), newItemLoading)}
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