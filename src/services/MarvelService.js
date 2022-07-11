import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {

    const { loading, request, error, clearError } = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=a29ee460fa7b8754a4ffa13551bb6eb6';

    const _baseOffsetCharacter = 210;

    const getAllCharacters = async (offset = _baseOffsetCharacter) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&apikey=a29ee460fa7b8754a4ffa13551bb6eb6`);
        return res.data.results.map(_transformComic);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComic(res.data.results[0]);
    }

    const editDescr = (descr, limit) => {
        if (descr) {
            if (descr.length >= limit) {
                return descr.slice(0, limit) + '...';
            } else {
                return descr;
            }
        } else {
            return 'Description not found';
        }
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: editDescr(char.description, 200),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homePage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComic = (comic) => {
        return {
            id: comic.id,
            name: comic.title,
            description: comic.description ? comic.description : 'No description...',
            page: comic.pageCount + ' pages',
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            language: comic.textObjects.language ? comic.textObjects.language : 'en-us',
            price: comic.prices[0].price + '$'
        }
    }

    return { loading, error, getAllCharacters, getCharacter, getAllComics, getComic, clearError };
}

export default useMarvelService;