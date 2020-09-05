import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import birbShape from '../../../helpers/props/birbShape';

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
    const editBirbLink = `/edit/${birb.id}`;

    return (
        <div className="col-4 mb-3">
          <div className="Birb card border-0">
            <div className="card-body">
              <h5 className="card-title">{birb.type}</h5>
              <p className="card-text">{birb.notes}</p>
              <div className="btn-group">
              <Link to={singleBirbLink} className="btn btn-secondary"><i className="far fa-eye"></i></Link>
              <Link to={editBirbLink} className="btn btn-warning"><i className="far fa-edit"></i></Link>
              <button className="btn btn-danger" onClick={this.deleteBirbEvent}><i className="fas fa-trash-alt"></i></button>
            </div>
          </div>
          <div className="card-footer text-muted">
            Updated: {moment(birb.seenAt).fromNow()}
          </div>
        </div>
      </div>
    );
  }
}

export default BirbCard;
