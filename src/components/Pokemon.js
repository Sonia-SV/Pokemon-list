import React from 'react';
import '../stylesheets/Pokemon.scss';

class Pokemon extends React.Component {
  render() {
    const pokemonType = this.props.types.map((eachType, index) => {
      return (
        <li className="poke__list__card__container__list__types" key={index}>
          <h4>{eachType}</h4>
        </li>
      );
    });
    return (
      <div className="poke__list__card__container">
        <h2 className="poke__list__card__container__name">{this.props.name}</h2>
        <img alt={this.props.name} src={this.props.url} className="poke__list__card__container__img" />
        <ul className="poke__list__card__container__list">{pokemonType}</ul>
      </div>
    );
  }
}

export default Pokemon;
