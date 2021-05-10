import React, { useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getIngredients } from './actions/ingredients'
import Ingredients from './components/ingredients/ingredients.js'
import IngredientForm from './components/ingredient_form/ingredient_form.js'
import NavBar from './components/navbar/navbar'
import useStyles from './style'

// This component is a functional component
const App = () => {
  // Styles
  const classes = useStyles();

  // Create a hook
  const dispatch = useDispatch()

  // useEffect
  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <Container className={classes.root} maxwidth='lg'>
      <NavBar title='Titolo'></NavBar>
      {/* <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Ingredients
        </Typography>
        <img src={IngredientsImg} alt='ingredients' height='60' />
      </AppBar> */}
      <Grow in>
        <Container  className={classes.content}>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Ingredients />
            </Grid>
            <Grid item xs={12} sm={4}>
              <IngredientForm />
            </Grid>
          </Grid>
        </Container>

      </Grow>

    </Container>
  )
}

export default App
