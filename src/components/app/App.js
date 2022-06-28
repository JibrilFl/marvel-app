import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ComicList from '../comicList/ComicList';
import ComicInfo from '../comicInfo/ComicInfo';
import CharWiki from '../charWiki/CharWiki';

import decoration from '../../resources/vigen-bg.png';
import AppBanner from '../appBanner/AppBanner';

function App() {
	return (
		<div className='app'>
			<AppHeader />
			<main>
				{/* <RandomChar /> */}
				<AppBanner />
				{/* <ComicList /> */}
				{/* <ComicInfo /> */}
				<CharWiki />
				{/* <div className="charList__wrapper">
					<CharList />
					<CharInfo />
				</div> */}
				{/* <img className='bg-decoration' src={decoration} alt="vigen" /> */}
			</main>
		</div>
	);
}

export default App;
