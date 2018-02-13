import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//import Header from './Header.jsx';
const Header = () => <h1>Header</h1>;
const MainPage = () => <h1>MainPage</h1>
const Review = () => <h1>Review</h1>
const Footer = () => <h1>Footer</h1>

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/location' component={MainPage} />
            <Route path='/location/review/new' component={Review} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
