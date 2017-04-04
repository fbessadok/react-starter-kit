import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App({ children }) {
  return (
    <MuiThemeProvider>
      {children}
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.shape(),
};

App.defaultProps = {
  children: {},
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);
