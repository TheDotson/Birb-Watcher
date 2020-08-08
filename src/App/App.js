import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Scat-Surprise</h1>
        <button className="btn btn-info">
        <i className="fas fa-surprise"></i> Surprise? <i className="fas fa-surprise"></i></button>
      </div>
    );
  }
}

export default App;
