import useStyles from './style'
import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import { Tooltip } from '@material-ui/core';

export default function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
            <ListItem button key='Ingredients'>
                <Tooltip title='Ingredients'><ListItemIcon><StorageOutlinedIcon /></ListItemIcon></Tooltip>
            </ListItem>
            <ListItem button key='Recipes'>
                <Tooltip title='Recipes'><ListItemIcon><FastfoodOutlinedIcon /></ListItemIcon></Tooltip>
            </ListItem>
            <ListItem button key='History'>
                <Tooltip title='History'><ListItemIcon><CalendarTodayOutlinedIcon /></ListItemIcon></Tooltip>
            </ListItem>
            <ListItem button key='Report'>
                <Tooltip title='Report'><ListItemIcon><TimelineOutlinedIcon /></ListItemIcon></Tooltip>
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
