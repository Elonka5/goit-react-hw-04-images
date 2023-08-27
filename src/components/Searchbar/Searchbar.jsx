import { Component } from 'react';
import { SearchBarStyled, SearchFormStyled } from './SearchBarStyled';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { value } = this.state;
    if (!value.trim()) {
      alert('Write something');
      return;
    }

    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <SearchBarStyled className="searchbar">
        <SearchFormStyled className="form" onSubmit={this.handleSubmit}>
          <input
            value={this.state.value}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </SearchFormStyled>
      </SearchBarStyled>
    );
  }
}
