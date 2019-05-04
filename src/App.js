import React, { PureComponent } from 'react';
import Cylis from './cylis/Cylis';
import Asset from './cylis/Asset'

// const Assets = ['Property', 'Car', 'Collection', 'Invention'];

class App extends PureComponent {
	state = {
		asset: ['Property', 'Car', 'Collection', 'Invention'],
	};

	addAsset(value) {
		const asset = this.state.asset;
		const newAsset = [...asset, value];
		this.setState({ asset: newAsset });
	}

	render() {
	return (
		<div>
			<section className="header">
				<h1>My React App</h1>
				<p>Description of this app</p>
				<div className="authorinfo">
					<Cylis surname="Vaidya" />
				</div>
			</section>
			<section className="asset-types">
				<ul>
					{this.state.asset.map(value => (
						<Asset name={value} />
					))}
				</ul>
				<button type="button" onClick={() => this.addAsset('Testing')}>
					Click me!
				</button>
			</section>
		</div>
    );
  }
}

export default App;
