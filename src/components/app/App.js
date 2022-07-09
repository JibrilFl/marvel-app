import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

	const onCharSelected = (id) => {
		setChar(id);
	}

	return (
		<Router>
			<div className='app'>
				<AppHeader />
				<main>
					<Switch>
						<Route exact path="/">
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
						</Route>
						<Route exact path="/comics">
							<AppBanner />
							<ComicList />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
