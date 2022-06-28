import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import decoration from '../../resources/vigen-bg.png';

function App() {

	return (
		<div className='app'>
			<AppHeader />
			<main>
				<RandomChar />
				<div className="charList__wrapper">
					<CharList />
					<CharInfo />
				</div>
				<img className='bg-decoration' src={decoration} alt="vigen" />
			</main>
		</div>
	);
}

export default App;
