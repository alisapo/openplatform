import React, { Component } from 'react';
import { getData } from '../getData/getData';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
  }

  componentDidMount() {
    getData()
      .then((data) => {
        try {
          switch (this.props.match.params.type) {
            case 'books': {
              const book = data.books.filter(item => item.id == this.props.match.params.id);
              this.setState({ item: book[0] });
            break;
            }
            case 'movies': {
              const movie = data.movies.filter(item => item.id == this.props.match.params.id);
              this.setState({ item: movie[0] });
            break;
            }
            case 'music': {
              const track = data.music.filter(item => item.id == this.props.match.params.id);
              this.setState({ item: track[0] });
            break;
            }
            default:
            break;
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => { console.log(err) });
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <div className="p-4">
          <h4>{this.state.item.title}</h4>
        </div>
        <div>
          <img src={this.state.item.img} alt="cover" />
        </div>
        <div className="card-body">
          <div>{this.state.item.genre}</div>
          <div className="font-weight-bold">{this.state.item.price} ₽</div>
        </div>
        <div>{this.state.item.description}</div>
      </div>
    )
  }
}

export default ProductPage;
