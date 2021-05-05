import React from 'react'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import Check from '@material-ui/icons/Check'
import Clear from '@material-ui/icons/Clear'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import useStyles from './style.js'

const Ingredient = () => {
  // Initialize global store
  const ingredients = useSelector((state) => state.ingredients) // Check the key name in the reducer file
  console.log(ingredients)

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

  // To be read from db: is visible as a dish?
  const isDish = true

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List
        component='nav'
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary='Ingredient element' />
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem className={classes.nested}>
              <Table className={classes.table}>
                <TableRow>
                  <TableCell variant='head'>Serving</TableCell>
                  <TableCell align='right'>100&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant='head'>Calories</TableCell>
                  <TableCell align='right'>0&nbsp;kcal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant='head'>Fat</TableCell>
                  <TableCell align='right'>1&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant='head'>Carbs</TableCell>
                  <TableCell align='right'>2&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant='head'>Proteins</TableCell>
                  <TableCell align='right'>3&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant='head'>Fibers</TableCell>
                  <TableCell align='right'>4&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant='head'>Sugar</TableCell>
                  <TableCell align='right'>5&nbsp;g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant='head'>Is dish</TableCell>
                  <TableCell align='right'>{isDish ? <Check color='primary' /> : <Clear color='secondary' />}</TableCell>
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
