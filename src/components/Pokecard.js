import React from "react";
import pokeapi from "../api/pokeapi";
import "./Pokecard.css";
class Pokecard extends React.Component {
  renderer = (props) => {
    if (props.response && !props.error) {
      let ability = "Abilities :";
      let no_ability = props.response.data.abilities.length;
      for (var i = 0; i < no_ability; i++) {
        ability = ability.concat(
          " ",
          props.response.data.abilities[i].ability.name,
          ","
        );
      }
      let moves = "Moves of the pokemon:";
      for (var i = 0; i < 2; i++) {
        moves = moves.concat(" ", props.response.data.moves[i].move.name, ",");
      }
      let stats = `${props.response.data.stats.length} Stats`;
      moves = moves.slice(0, -1);
      ability = ability.slice(0, -1);
      return (
        <div className="ui card " id="pokemon">
          <div className="image">
            <img
              src={props.response.data.sprites.front_default}
              alt={props.response.data.forms[0].name}
            />
          </div>
          <div className="content">
            <a className="header">
              {props.response.data.forms[0].name.charAt(0).toUpperCase() +
                props.response.data.forms[0].name.slice(1)}
            </a>
            <div className="meta">
              <span className="date">{ability}</span>
            </div>
            <div className="description">{moves}</div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
              {stats}
            </a>
          </div>
        </div>
      );
    } else if (!props.response && props.error) {
      return (
        <div className="error">
          <img src="/assets/warning_sign.png" />
          <h1 style={{ color: "white" }}>{props.error.response.data}</h1>
        </div>
      );
    } else {
      return "";
    }
  };
  render = () => {
    return <div>{this.renderer(this.props)}</div>;
  };
}
export default Pokecard;
