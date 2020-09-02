import React from 'react';
import ReactDatePicker from 'react-datepicker';

class NewBirb extends React.Component {
  state = {
    type: '',
    color: '',
    size: '',
    seenAt: new Date(),
    altColor: '',
    wasSleeping: true,
    location: '',
    notes: '',
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  }

  seenAtEvent = (seenAt) => {
    this.setState({ seenAt });
  }

  saveBirb = (e) => {
    e.preventDefault();
    
  }

  render() {
    const { type, seenAt } = this.state;
    return (
      <div className="NewBirb">
        <h1>NewBirb</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlfor="">Type</label>
            <input
            type="text"
            classname="form-control"
            id="birbType"
            placeholder="Enter Birb Type"
            value={type}
            onChange={this.changeTypeEvent}
            />
          </div>
          <div>
            <label htmlfor="birbSeenAt">Seen At: </label>
            <ReactDatePicker
              selected={seenAt}
              onChange={this.seenAtEvent}
              showTimeSelect
            />
          </div>
        </form>
      </div>
    );
  }
}

export default NewBirb;
