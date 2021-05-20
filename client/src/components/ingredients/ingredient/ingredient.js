import React from 'react'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import {Table, TableCell, TableRow} from '@material-ui/core'

import Check from '@material-ui/icons/Check'
import Clear from '@material-ui/icons/Clear'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import useStyles from './style.js'

const Ingredient = ({ingredient}) => {

  // Use the classes from the style file
  const classes = useStyles()

  // Create states for the component to handle open/closed state
  const [open, setOpen] = React.useState(false)

  // Create a function to toggle the state
  const handleClick = () => {
    setOpen(!open)
  }

  // Create a function for when you click away from the item
  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List
        component='nav'
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary={ingredient.name} />
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem className={classes.nested}>
              <Table className={classes.table}>
                <TableRow>
                  <TableCell>Serving</TableCell>
                  <TableCell align='right'>{ingredient.ref_qt}&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Calories</TableCell>
                  <TableCell align='right'>{ingredient.kcals}&nbsp;kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fat</TableCell>
                  <TableCell align='right'>{ingredient.fats}&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Carbs</TableCell>
                  <TableCell align='right'>{ingredient.carbs}&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Proteins</TableCell>
                  <TableCell align='right'>{ingredient.proteins}&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fibers</TableCell>
                  <TableCell align='right'>{ingredient.fibers}&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sugar</TableCell>
                  <TableCell align='right'>{ingredient.sugars}&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.lastRow}>Is dish</TableCell>
                  <TableCell align='right' className={classes.lastRow}>{ingredient.is_dish ? <Check color='primary' /> : <Clear color='secondary' />}</TableCell>
                </TableRow>
              </Table>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </ClickAwayListener>
  )
}

export default Ingredient
