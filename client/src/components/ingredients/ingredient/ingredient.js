import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import useStyles from './style.js'

const Ingredient = () => {
    // Use the classes from the style file
    const classes = useStyles();

    // Create states for the component to handle open/closed state
    const [open, setOpen] = React.useState(false);

    // Create a function to toggle the state
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            className={classes.root}
            >
                <ListItem button onClick={handleClick}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                    <ListItemText primary="Ingredient element" />
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem className={classes.nested}>
                            <ListItemText primary="Description" />
                        </ListItem>
                        <ListItem className={classes.nested}>
                            <div>
                                a
                                b    
                            </div>
                        </ListItem>
                    </List>     
                </Collapse>
            </List>
       
    );
}

export default Ingredient