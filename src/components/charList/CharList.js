import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading: false
        });
    }

    renderCharacters = (arr) => {
        const items = arr.map(item => {
            const { id, name, thumbnail } = item;

            let styleImg = { objectFit: 'cover' };
            if (thumbnail.indexOf('image_not') > -1) {
                styleImg.objectFit = 'contain'
            }

            return (
                <div className="charList__item" key={id}>
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
        const { charList, loading, error } = this.state;

        const items = this.renderCharacters(charList);

        const content = !(loading || error) ? items : null;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null

        return (
            <div className="charList">
                {content}
                {spinner}
                {errorMessage}
                <button className="btn btn__long btn__main" href="#">
                    <div className="inner">Load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;