import React from 'react';
import Header from './modules/Header.js'
import Footer from './modules/Footer.js'
import Main from './modules/Main.js'
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <React.Fragment>
          <Header />
          <Main />
          <Footer />
        </React.Fragment>
      </div>
    )
  }
}

export default App;
