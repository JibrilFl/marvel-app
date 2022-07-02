import { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 1544,
        charEnded: false
    }

    charRefs = [];

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();

        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        if (document.documentElement.scrollHeight === (window.pageYOffset + document.documentElement.clientHeight)) {
            this.onRequest(this.state.offset);
        }
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({ newItemLoading: true })
    }

    onCharListLoaded = (charList) => {
        let ended = false;
        if (charList.length < 9) {
            ended = true;
        }

        this.setState((state) => ({
            charList: [...state.charList, ...charList],
            loading: false,
            newItemLoading: false,
            offset: state.offset + 9,
            charEnded: ended
        }));
    }

    setCharRef = (char) => {
        this.charRefs.push(char);
    }

    onFocusChar = (id) => {
        this.charRefs.forEach(item => item.classList.remove('active'));
        this.charRefs[id].classList.add('active');
        this.charRefs[id].focus();
    }

    renderCharacters = (arr) => {
        const items = arr.map((item, i) => {
            const { id, name, thumbnail } = item;

            let styleImg = { objectFit: 'cover' };
            if (thumbnail.indexOf('image_not') > -1) {
                styleImg.objectFit = 'contain'
            }

            return (
                <div
                    className='charList__item'
                    ref={this.setCharRef}
                    key={id}
                    tabIndex={0}
                    onClick={() => {
                        this.props.onCharSelected(id);
                        this.onFocusChar(i)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            this.props.onCharSelected(id);
                            this.onFocusChar(i);
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

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    render() {
        const { charList, loading, error, newItemLoading, offset, charEnded } = this.state;

        const items = this.renderCharacters(charList);

        const content = !(loading || error) ? items : null;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null

        return (
            <div className="charList">
                {content}
                {spinner}
                {errorMessage}
                <button
                    className="btn btn__long btn__main"
                    disabled={newItemLoading}
                    style={{ 'display': charEnded ? 'none' : 'block' }}
                    onClick={() => this.onRequest(offset)} >
                    <div className="inner">Load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;