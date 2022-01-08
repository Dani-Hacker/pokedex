import React from "react";
import SearchBar from "./SearchBar";
import Pokecard from "./Pokecard";
import pokeapi from "../api/pokeapi";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { responses: null, error_msg: null };
  }

  get_data = async (pokemon) => {
    try {
      const response = await pokeapi.get(`/${pokemon.toLowerCase()}`);
      this.setState({
        error_msg: null,
        responses: response,
      });
    } catch (e) {
      this.setState({ error_msg: e, responses: null });
    }
  };
  render() {
    return (
      <div className="ui segment inverted" style={{ marginTop: "10px" }}>
        <SearchBar on_submit={this.get_data} />
        <Pokecard
          response={this.state.responses}
          error={this.state.error_msg}
        />
      </div>
    );
  }
}
export default App;
