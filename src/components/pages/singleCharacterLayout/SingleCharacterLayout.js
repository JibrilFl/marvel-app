import { Helmet } from 'react-helmet';

import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({ data }) => {
    const { name, description, thumbnail } = data;


    let style = { objectFit: 'cover' };
    if (thumbnail.indexOf('image_not') > -1) {
        style.objectFit = 'fill'
    }

    return (
        <div className="charWiki">
            <Helmet>
                <meta name="description" content={`${name} comics book`} />
                <title>{name}</title>
            </Helmet>
            <img className="charWiki__img" src={thumbnail} alt={name} style={style} />
            <div className="charWiki__inner">
                <h3 className="charWiki__title">{name}</h3>
                <p className="charWiki__descr">{description}</p>
            </div>
        </div >
    )
}

export default SingleCharacterLayout;