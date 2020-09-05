import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import birbShape from '../../../helpers/props/birdShape';

class BirbCard extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
    deleteBirb: PropTypes.func.isRequired,
  }

  deleteBirbEvent = (e) => {
    e.preventDefault();
    const { birb, deleteBirb } = this.props;
    deleteBirb(birb.id);
  }

  render() {
    const { birb } = this.props;
    const singleBirbLink = `/birbs/${birb.id}`;
    const editLink = `/edit/${birb.id}`;

    return (
      <div className="Birb card">
        <div className="card-body">
          <h5 className="card-title">{birb.type}</h5>
          <p className="card-text">{birb.notes}</p>
          <Link to={singleBirbLink} className="btn btn-secondary"><i className="far fa-eye"></i></Link>
          <Link to={editLink} className="btn btn-warning"><i className="far fa-edit"></i></Link>
          <button className="btn btn-danger" onClick={this.deleteBirbEvent}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default BirbCard;
