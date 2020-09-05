import React from 'react';
import authData from '../../../helpers/data/authData';
import birbData from '../../../helpers/data/birbData';
import BirbCard from '../../shared/BirbCard/BirbCard';
import './Home.scss';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  getBirbs = () => {
    birbData.getBirbsByUid(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getBirbs();
  }

  deleteBirb = (birbId) => {
    birbData.deleteBirb(birbId)
      .then(() => {
        this.getBirbs();
      })
      .catch((err) => console.error('Delete birb failed', err));
  }

  render() {
    const { birbs } = this.state;
    const birbCards = birbs.map((birb) => <BirbCard key={birb.id} birb={birb} deleteBirb={this.deleteBirb}/>);

    return (
      <div className="Home">
        <h1><span role="img" aria-label="birb emoji">🐦</span> <span role="img" aria-label="house emoji">🏚</span></h1>
        <div className="birdCage">
          {birbCards}
        </div>
      </div>
    );
  }
}

export default Home;
