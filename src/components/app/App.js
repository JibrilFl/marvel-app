import { Component } from 'react';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import decoration from '../../resources/vigen-bg.png';

class App extends Component {

	state = {
		selectedChar: null
	}

	onCharSelected = (id) => {
		this.setState({
			selectedChar: id
		})
	}

	render() {
		return (
			<div className='app'>
				<AppHeader />
				<main>
					<RandomChar />
					<div className="charList__wrapper">
						<CharList onCharSelected={this.onCharSelected} />
						<CharInfo charId={this.state.selectedChar} />
					</div>
					<img className='bg-decoration' src={decoration} alt="vigen" />
				</main>
			</div>
		);
	}
}

export default App;
