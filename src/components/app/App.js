import { useState } from 'react';
import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/AppBanner';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ComicList from '../comicList/ComicList';

import decoration from '../../resources/vigen-bg.png';

const App = () => {

	const [selectedChar, setChar] = useState(null);
	const [selectedComic, setComic] = useState(null);

	const onCharSelected = (id) => {
		setChar(id);
	}

	const onComicSelected = (id) => {
		setComic(id);
		console.log('Гача!');
	}

	return (
		<div className='app'>
			<AppHeader />
			<AppBanner />
			<main>
				<ErrorBoundary>
					<RandomChar />
				</ErrorBoundary>
				<div className="charList__wrapper">
					<ErrorBoundary>
						<CharList onCharSelected={onCharSelected} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} />
					</ErrorBoundary>
				</div>
				<img className='bg-decoration' src={decoration} alt="vigen" />
				<ComicList onComicSelected={onComicSelected} />
			</main>
		</div>
	);
}

export default App;
