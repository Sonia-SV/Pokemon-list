import React from 'react';
import pokemonFromApi from '../data/list.json';
import Header from './Header';
import PokeList from './PokeList';
import '../stylesheets/reset.scss';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonArray: pokemonFromApi,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <PokeList pokemonArray={this.state.pokemonArray} />
      </div>
    );
  }
}

export default App;
