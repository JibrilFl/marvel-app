import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singlePage.scss';

const SinglePage = ({ Component, dataType }) => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    const { loading, error, getComic, getCharacter, clearError } = useMarvelService();

    useEffect(() => {
        updateData();
    }, [id]);

    const updateData = () => {
        clearError();

        switch (dataType) {
            case 'comic':
                getComic(id).then(onDataLoaded);
                break;
            case 'character':
                getCharacter(id).then(onDataLoaded);
                break;
        }
    }

    const onDataLoaded = (newData) => {
        setData(data => newData);
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !data) ? <Component data={data} /> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

export default SinglePage;