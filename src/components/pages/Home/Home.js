import React from 'react';
import authData from '../../../helpers/data/authData';
import birbData from '../../../helpers/data/birbData';
import BirbCard from '../../shared/BirbCard/BirbCard';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  componentDidMount() {
    birbData.getBirbsByUid(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error('Get birbs failed', err));
  }

  render() {
    const { birbs } = this.state;
    const birbCards = birbs.map((birb) => <BirbCard key={birb.id} birb={birb}/>);

    return (
      <div className="Home">
        <h1><span role="img" aria-label="birb emoji">🐦</span> <span role="img" aria-label="house emoji">🏚</span></h1>
        {birbCards}
      </div>
    );
  }
}

export default Home;
