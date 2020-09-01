/* eslint-disable max-len */
import React from 'react';
import birbShape from '../../../helpers/props/birdShape';

class SingleBirbCard extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;
    return (
      <div className="singleBirb card">
        <div className="card-body">
          <p className="card-text">The {birb.type} can typically be found at {birb.location}.  Birds of this type typically rates as {birb.size} on the Rogers-Stark Scale and typcially has {birb.color} colored plumage.</p>

        </div>

      </div>

    );
  }
}

export default SingleBirbCard;
