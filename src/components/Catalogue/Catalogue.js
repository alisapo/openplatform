import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SideBar from '../SideBar/SideBar';
import ItemCard from '../ItemCard/ItemCard';

import { getData } from '../getData/getData';
import { getCategory } from '../js/getCategory';
import { getFiltered } from '../js/getFiltered';
import { getChoosenGenres } from '../js/getChoosenGenres';
import { getSwitchers } from '../js/getSwitchers';

class Catalogue extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      items: '',
      genres: '',
      types: ''
    };

    this.handleType = this.handleType.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.fillData = this.fillData.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
  }

  componentDidMount() {
    this.fillData();
  }

  fillData() {
    getData()
      .then(data => {
        this.setState({
          types: data.types
        });
        const items = getSwitchers(data, this.props.match.params.type);
        this.setState({
          items: items.items,
          genres: items.genres
        });
    });
  }

  handleGenre(e) {
    getData()
      .then(data => {
      const newData = getChoosenGenres(
        data,
        this.props.match.params.type,
        e.target.textContent
      );
      this.setState({
        items: newData
      });
    });
  }

  handleFilters(title, priceOne, priceTwo) {
    const filteredItems = getFiltered(
      this.state.items,
      title,
      priceOne,
      priceTwo
    );
    this.setState({
      items: filteredItems
    });
  }

  handleType(type) {
    getData()
      .then(data => {
        const switchOtherType = getSwitchers(data, type);
        this.setState({
          items: switchOtherType.items,
          genres: switchOtherType.genres
        });
      })
  }

  render() {
    const items = Array.from(this.state.items);
    const genres = Array.from(this.state.genres);
    const types = Array.from(this.state.types);

    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-row">
            {
              types.map((type) => 
                <Link
                  className="text-decoration-none p-4"
                  to={`/${type}`}
                  onClick={(e) => this.handleType(type)}
                  key={type}
                >
                  {getCategory(type)}
                </Link>
              )
            }
            </div>
            <div className="d-flex flex-row">
              {
                genres.map((genre) =>
                  <div
                    className="btn btn-primary m-2"
                    onClick={this.handleGenre}
                  >
                    {genre}
                  </div>
                )
              }
            </div>
            <div
              name='reset'
              className="btn btn-primary"
              onClick={this.fillData}
            >
              Сбросить все фильтры
            </div>
        </div>
        <SideBar
          handleFilters={this.handleFilters}
          fillData={this.fillData}
        />
        <div className="row row-cols-1 row-cols-md-2">
          {
            !this.state.items ? (
              <div>Loading...</div>
                ) : (
                  items.map((item) =>
                    <Link
                      className="text-decoration-none"
                      to={`/${this.props.match.params.type}/product=${item.id}`}
                    >
                      <ItemCard key={item.id} {...item} />
                    </Link>
                  )
                )
          }
        </div>
      </div>
    );
  }
}

export default Catalogue;
