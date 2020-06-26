import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import { connect } from 'react-redux';

const Header = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Products page example
          </Typography>
        </Toolbar>
      </AppBar>
      {/* End Header */}
    </React.Fragment>
  );
};

// export default Todo;
export default connect(
  null,
  {}
)(Header);
