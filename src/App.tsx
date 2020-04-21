import React, { Component } from 'react';
import 'reset-css'
import NavbarScroller from './components/NavbarScroller';

const navigation = {
  brand: { name: "Company Name", to: "/" },
  links: [
    { name: 'Item 1', to: '/' },
    { name: 'Item 2', to: '/' },
    { name: 'Item 3', to: '/' },
    { name: 'Item 4', to: '/' },
    { name: 'Item 5', to: '/' },
    { name: 'Item 6', to: '/' },
    { name: 'Item 7', to: '/' },
    { name: 'Item 8', to: '/' }
  ]
};

class App extends Component {
  public render() {
    const { brand, links } = navigation;

    return (
      <div className="App">
        <NavbarScroller brand={brand} links={links} />
        <div className="hello">
          <br></br>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <br></br>
        <div> Hello! Welcome to our first React App</div>
      </div>
    );
  }
}

export default App;