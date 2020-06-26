import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { connect } from 'react-redux';

const Copyright = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Copyright */}
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      {/* End Copyright */}
    </React.Fragment>
  );
};

// export default Todo;
export default connect(
  null,
  {}
)(Copyright);
