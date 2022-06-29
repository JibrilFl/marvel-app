import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import mjolnir from '../../resources/shield-and-mjolnir.png';

import './randomChar.scss';

class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }

    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const { char, loading, error } = this.state;
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;

        return (
            <div className="container">
                <div className="randomChar">
                    {errorMessage}
                    {spinner}
                    {content}
                    <div className="randomChar__box">
                        <h2 className="randomChar__box_title">
                            Random character for today! <br />
                            Do you want to get to know him better?
                        </h2>
                        <p className="randomChar__box_another">
                            Or choose another one
                        </p>
                        <div className="randomChar__box_btn">
                            <a className="btn btn__main" href="#Homepage">
                                <div className="inner">Try it</div>
                            </a>
                        </div>
                        <img className="randomChar__box_img" src={mjolnir} alt="shield and mjolnir" />
                    </div>
                </div>
            </div>
        )
    }
}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char;

    return (
        <div className="randomChar__info">
            <img className="randomChar__info_img" src={thumbnail} alt={name} />
            <div className="randomChar__info_inner">
                <div className="randomChar__info_name">{name}</div>
                <p className="randomChar__info_descr">{description}</p>
                <div className="randomChar__info_btns">
                    <a className="btn btn__main" href={homepage}>
                        <div className="inner">Homepage</div>
                    </a>
                    <a className="btn btn__secondary" href={wiki}>
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;