import PropTypes from 'prop-types';

const birbShape = PropTypes.shape({
  altColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  seenAt: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  wasSleeping: PropTypes.bool.isRequired,
});

export default { birbShape };
