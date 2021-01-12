import React, { Component } from 'react';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      price_one: '',
      price_two: '',
      disabled: true
    };

    this.searchSubmit = this.searchSubmit.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  handleData(e) {
    this.setState({
      [e.target.name]: e.target.value,
      disabled: false
    });
  }

  searchSubmit(e) {
    e.preventDefault();
    if (
      !this.state.searchQuery 
      && !this.state.price_one 
      && !this.state.price_two
    ) return;

    this.props.handleFilters(
      this.state.searchQuery, 
      this.state.price_one, 
      this.state.price_two
    );
    
    this.setState({
      searchQuery: '',
      price_one: '',
      price_two: '',
      disabled: true
    });
  }

  render() {
    return (
      <div className="mb-3">
       <form onSubmit={this.searchSubmit}>
         <div className="d-flex flex-row align-items-center">
           <div className="w-30 d-flex mt-2 mr-5">
             <input
               value={this.state.searchQuery}
               className="form-control"
               type='text'
               name='searchQuery'
               onChange={this.handleData}
               placeholder='Введите название' />
           </div>
           <div className="w-75 d-flex mt-2 align-items-center">
             <div className="mr-2">цена</div>
               <div className="d-flex">
                 <div className="mr-3">
                   <input
                     value={this.state.price_one}
                     className="form-control"
                     type='number'
                     name='price_one'
                     onChange={this.handleData}
                     placeholder='От' />
                 </div>
                 <div>
                   <input
                     value={this.state.price_two}
                     className="form-control"
                     type='number'
                     name='price_two'
                     onChange={this.handleData}
                     placeholder='До' />
                 </div>
               </div>
           </div>
           <input
             className="btn btn-primary mb-2 mt-3"
             type="submit"
             disabled={this.state.disabled}
             value="Применить"
           />
         </div>
        </form>
      </div>
    );
  }
}

export default SideBar;
