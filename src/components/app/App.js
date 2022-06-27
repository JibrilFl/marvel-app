import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';

import decoration from '../../resources/vigen-bg.png';

function App() {
	return (
		<div className='app'>
			<AppHeader />
			<main>
				<RandomChar />
				<img className='bg-decoration' src={decoration} alt="vigen" />
			</main>
		</div>
	);
}

export default App;
