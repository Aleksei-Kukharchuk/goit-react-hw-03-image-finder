import { ToastContainer } from 'react-toastify';
import React, { Component } from 'react'
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import './App.css';

class App extends Component {

  state = {
    query: '',
  }

  handleFormSubmit = query => {
    this.setState({ query })
  }

  render() {

    const { query } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery query={query} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
