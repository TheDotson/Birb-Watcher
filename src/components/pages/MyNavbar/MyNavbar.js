import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../Auth/Auth';
import LogOut from '../Logout/LogOut';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  render() {
    const { authed } = this.props;

    const loadComponent = () => {
      if (authed) {
        return <LogOut />;
      }

      return <Auth />;
    };

    return (
      <div className="MyNavbar">
        <h1>My Navbar</h1>
        {loadComponent()}
      </div>
    );
  }
}

export default MyNavbar;
