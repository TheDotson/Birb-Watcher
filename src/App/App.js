import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';
import EditBirb from '../components/pages/EditBirb/EditBirb';
import Home from '../components/pages/Home/Home';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import NewBirb from '../components/pages/NewBirb/NewBirb';
import SingleBirb from '../components/pages/SingleBirb/SingleBirb';
import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <MyNavbar authed={authed}/>
        <h1>Birb-Watcher</h1>
        <Home/>
        <EditBirb/>
        <NewBirb/>
        <SingleBirb/>
      </div>
    );
  }
}

export default App;
