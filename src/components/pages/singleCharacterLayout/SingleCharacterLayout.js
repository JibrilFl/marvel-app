

const SingleCharacterLayout = ({ data }) => {
    const { name, description, thumbnail } = data;

    let style = { objectFit: 'cover' };
    if (thumbnail.indexOf('image_not') > -1) {
        style.objectFit = 'fill'
    }

    return (
        <div className="charInfo">
            <img className="charInfo__img" src={thumbnail} alt={name} style={style} />
            <div className="charInfo__inner">
                <h3 className="charInfo__title">{name}</h3>
                <p className="charInfo__descr">{description}</p>
            </div>
        </div >
    )
}

export default SingleCharacterLayout;