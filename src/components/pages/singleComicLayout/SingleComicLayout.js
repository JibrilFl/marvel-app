import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import './singleComicLayout.scss';

const SingleComicLayout = ({ data }) => {
    const { name, description, thumbnail, page, language, price } = data;

    const navigate = useNavigate();

    let style = { objectFit: 'cover' };
    if (thumbnail.indexOf('image_not') > -1) {
        style.objectFit = 'fill'
    }

    return (
        <div className="comicInfo">
            <Helmet>
                <meta name="description" content={`${name} comics book`} />
                <title>{name}</title>
            </Helmet>
            <img className="comicInfo__img" src={thumbnail} alt={name} style={style} />
            <div className="comicInfo__inner">
                <h3 className="comicInfo__title">{name}</h3>

                <p className="comicInfo__descr">{description}</p>
                <p className="comicInfo__pages">{page}</p>
                <p className="comicInfo__lang">Language: {language}</p>
                <p className="comicInfo__price">{price}</p>
            </div>
            <a className="comicInfo__link" onClick={() => navigate(-1)} style={{ 'cursor': 'pointer', 'height': '100%' }}>Back to all</a>
        </div >
    )
}

export default SingleComicLayout;