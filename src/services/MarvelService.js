class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=a29ee460fa7b8754a4ffa13551bb6eb6';

    _baseOffsetCharacter = 210;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffsetCharacter) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    editDescr = (descr, limit) => {
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

    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: this.editDescr(char.description, 200),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService;