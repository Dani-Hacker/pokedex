import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  state = { pokemon: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.on_submit(this.state.pokemon);
  };
  render() {
    return (
      <div style={{ marginLeft: "10px" }}>
        <center>
          <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
            <div className="ui input focus search-bar">
              <input
                type="text"
                placeholder="Enter Pokemon Name"
                value={this.state.pokemon}
                onChange={(e) => this.setState({ pokemon: e.target.value })}
              />
            </div>
          </form>
        </center>
      </div>
    );
  }
}
export default SearchBar;
