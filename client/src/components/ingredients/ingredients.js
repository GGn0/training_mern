import React from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress, Box, useMediaQuery, useTheme } from '@material-ui/core'


import Ingredient from './ingredient/ingredient.js'
import useStyles from './style.js'

const Ingredients = () => {
  // Access the global state. Check the key in the reducer file
  const ingredients = useSelector((state) => state.ingredients)

  // use styles
  const classes = useStyles()

  // Use breakpoints
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));

  console.log(ingredients)
  return (
    !ingredients.length ? <Box className={classes.loadingBox}><CircularProgress size={lg ? 400 : md ? 200 : sm ? 50 : 20}/></Box> : (
      // React fragment
        <>
          <h1>Ingredients list</h1>
          {/* <Ingredient /> */}
          {ingredients.map((ingredient) => (
              <Ingredient key={ingredient._id} ingredient={ingredient}/>
          ))}
        </>
    )
  )
}

export default Ingredients
