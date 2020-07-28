import React from 'react';
import '../stylesheets/Pokemon.scss';

class Pokemon extends React.Component {
  render() {
    console.log(this.props.types);
    const pokemonType = this.props.types.map((eachType, index) => {
      return (
        <li className="poke__card__types" key={index}>
          <h4>{eachType}</h4>
        </li>
      );
    });
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.url} />
        <h4>{this.props.types}</h4>
        <ul>{pokemonType}</ul>
      </div>
    );
  }
}

export default Pokemon;
