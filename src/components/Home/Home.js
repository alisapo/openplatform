import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getCategory } from '../js/getCategory';
import { getData } from '../fetcher/getData';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: '',
    };
  }

  componentDidMount() {
    getData()
      .then((data) => {
        this.setState({
          types: data.types,
        });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    const types = Array.from(this.state.types);
    
    return (
      <div className="d-flex justify-content-center">
        {
         !types.length ? (
            <div>Loading...</div>
            ) : (
            types.map(type =>
              <Link
                className="text-decoration-none"
                key={type}
                to={`/${type}`}
              >
                <div className="p-4">{getCategory(type)}</div>
              </Link>
            )
            )
        }
      </div>
    );
  }
}

export default Home;
