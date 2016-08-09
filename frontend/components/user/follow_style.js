const FollowStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.55)',
  },

  content : {
    position        : 'fixed',
    margin          : '5% auto',
    width           : '350px',
    height          : '500px',
    background      : '#fff',
    border          : '1px solid #ccc',
    padding         : '0',
    borderRadius    : '3px',
    opacity         : '0',
    transition      : 'opacity 1s'
  }
};

module.exports = FollowStyle;
