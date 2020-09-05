import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import birbShape from '../../../helpers/props/birbShape';
import birbData from '../../../helpers/data/birbData';

class SingleBirb extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  state = {
    birb: {},
  }

  getBirbData = () => {
    const { birbId } = this.props.match.params;
    birbData.getBirbById(birbId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error('Get single birb failed', err));
  }

  componentDidMount() {
    this.getBirbData();
  }

  deleteBirbEvent = (e) => {
    e.preventDefault();
    const { birbId } = this.props.match.params;
    birbData.deleteBirb(birbId)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch((err) => console.error('Delete birb did not work', err));
  }

  render() {
    const { birb } = this.state;
    const { birbId } = this.props.match.params;
    const editBirbLink = `/edit/${birbId}`;

    return (
      <div className="SingleBirb mt-3 p-3 bg-light rounded">
        <h1>Welcome to the {birb.type} page</h1>
        <p>Bird seen at: {birb.location}</p>
        <p>Size: {birb.size}</p>
        <p>Colors: {birb.color}, {birb.altColor}</p>
        <p>Last seen on: {moment(birb.seenAt).format('MMMM Do YYYY, h:mma')}</p>
        <p>Note: {birb.notes}</p>
        <p>Was Sleeping: {birb.wasSleeping ? 'Yes' : 'No'}</p>
        <Link to={editBirbLink} className='btn btn-warning' ><i className="far fa-edit"></i></Link>
        <button className="btn btn-danger" onClick={this.deleteBirbEvent}><i className="fas fa-trash-alt"></i></button>
      </div>
    );
  }
}
export default SingleBirb;
