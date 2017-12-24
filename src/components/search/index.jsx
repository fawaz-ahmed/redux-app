import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AutoAffix } from 'react-overlays';
import { InputGroup, Input, InputGroupAddon, FormGroup } from 'reactstrap';
import SearchIcon from 'react-icons/lib/fa/search';

class Search extends Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.onSearch(value);
    }, 1000);
  }

  render() {
    return (
      <AutoAffix offsetTop={0} affixStyle={{ zIndex: 2 }}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              onChange={this.onChange}
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </AutoAffix>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
