import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

class PokeList extends React.Component {
  render() {
    console.log(this.props.pokemonArray);
    const pokemonItem = this.props.pokemonArray.map((eachPokemon) => {
      return (
        <li className="poke__card" key={eachPokemon.id}>
          <Pokemon name={eachPokemon.name} url={eachPokemon.url} types={eachPokemon.types} />
        </li>
      );
    });
    return (
      <div>
        <ul>{pokemonItem}</ul>
      </div>
    );
  }
}

export default PokeList;
