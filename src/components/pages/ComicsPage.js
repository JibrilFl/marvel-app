import { Helmet } from 'react-helmet';

import AppBanner from '../appBanner/AppBanner';
import ComicList from '../comicList/ComicList';

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Page with list of our comics" />
                <title>Comics page</title>
            </Helmet>
            <AppBanner />
            <ComicList />
        </>
    )
}

export default ComicsPage;