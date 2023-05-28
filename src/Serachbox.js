import React, from "react";
import { useState } from "react";

class SearchBox extends Component {
  state = {
    name: "",
    age: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, age } = this.state;

    // Make an API call to search the data
    // ...

    // If the search is successful, update the state and render the results
    if (isSearchSuccessful) {
      this.setState({
        results: results,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={age}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {results && (
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                {result.name} - {result.age}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default SearchBox;