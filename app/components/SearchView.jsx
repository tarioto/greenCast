import React from 'react';
import {Link} from 'react-router';

class SearchView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  innerStopSearching() {
    this.props.stopSearching();
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <input
          style={styles.searchBar}
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button style={styles.searchButton}>
          <i className="fa fa-search" ariaHidden="true"></i>
        </button>
        <Link to='/subscriptions' style={styles.myPodcasts} >My Podcasts</Link>
      </div>
    );
  }
}

const styles = {
  searchBar: {
    width: '200px',
    height: '20px',
    background: 'white',
  },
  searchButton: {
    height: '20px',
    fontSize: '15px',
    color: 'white',
    marginLeft: '5px',
    background: 'rgb(90, 199, 90)',
    border: '0px'
  },
  myPodcasts: {
    position: 'absolute',
    top: '-21px',
    marginTop: '15px',
    fontFamily: 'droid sans',
    textDecoration: 'none',
    background: 'rgb(90, 199, 90)',
    color: 'white',
    height: '20px',
    fontSize: '15px',
    border: '0px',
    cursor: 'pointer'
  }
};

export default SearchView;
