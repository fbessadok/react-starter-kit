import React from 'react';
import PropTypes from 'prop-types';
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
  children: <div />,
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);
