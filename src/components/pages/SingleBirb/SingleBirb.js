import React from 'react';
import birbData from '../../../helpers/data/birbData';
import SingleBirbCard from '../../shared/SingleBirbCard/SingleBirbCard';

class SingleBirb extends React.Component {
  state = {
    birb: {},
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;
    birbData.getBirbById(birbId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error('Get single birb failed', err));
  }

  render() {
    const { birb } = this.state;

    return (
      <div className="SingleBirb">
        <h1>{birb.type}</h1>
        <SingleBirbCard birb={birb}/>
      </div>
    );
  }
}

export default SingleBirb;
