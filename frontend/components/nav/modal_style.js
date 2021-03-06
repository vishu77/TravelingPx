const ModalStyle = {
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
    top             : '100px',
    left            : '50px',
    right           : '50px',
    bottom          : '50px',
    background      : '#fff',
    border          : '1px solid #ccc',
    padding         : '0',
    outline         : 'none',
    borderRadius    : '3px',
    opacity         : '0',
    transition      : 'opacity 1s'
  }
};

module.exports = ModalStyle;
