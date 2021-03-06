import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LagoonMap from '../components/LagoonMap';
import { LeftSideBar } from '../components/LeftSideBar';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#262D26',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: 'fixed',
    top: 90,
    left: 20,
    zIndex: 1201,
    minHeight: 400,
    display: 'flex',
    maxHeight: 'calc(100% - 120px)',
    overflow: 'scroll',
    borderRadius: '6px'
  },
  secondaryColor: {
    color: theme.palette.secondary.main,
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'relative',
    borderRadius: 6,
    height: 'auto'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  toolbar: theme.mixins.toolbar,
});

const drawerWidth = 380;

const Home = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <LeftSideBar classes={classes} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <LagoonMap />
      </main>
    </div>
  );
}

export default withStyles(styles)(Home);
