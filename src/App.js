import React from 'react';
import ImageSearch from './ImageSearch/ImageSearch';
import ImageList from './ImageList/ImageList';

const API_KEY = '21389146-cca5561c436f6f4cadcc8ecb1';


class App extends React.Component {
  state = {
    images: [],
    error: null
  }

  handleGetRequest = async e => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchValue.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`;
    const request = await fetch(url);
    const response = await request.json();
    if (!searchTerm) {
      this.setState({
        error: "Please provide a value."
      })
    } else {
      this.setState({
        images: response.hits,
        error: null
      })
    }
  }

  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        {
          this.state.error !== null ? 
          <div style={{color: "#fff", textAlign: "center"}}>{ this.state.error }</div> :
          <ImageList images={this.state.images} />
        }
      </div>
    )
  }
}

export default App;