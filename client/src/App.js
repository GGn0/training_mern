import React, { useEffect } from 'react'
import { Container, Grow, Grid, Fab, Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch } from 'react-redux'
import { SnackbarProvider, useSnackbar } from 'notistack';

import { getIngredients } from './actions/ingredients'
import Ingredients from './components/ingredients/ingredients.js'
import NavBar from './components/navbar/navbar'
import useStyles from './style'
import IngredientDialog from './components/Ingredient_dialog/ingredient_dialog'


// This component is a functional component
const App = () => {
  // Open state for add-ingredient form
  const [open, setOpen] = React.useState(false);

  // Styles
  const classes = useStyles()

  // Create a hook
  const dispatch = useDispatch()

  // useEffect
  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  // When the + button is pressed
  const handleClickOpen = () => {
    // set the open state of the add-ingredient form
    setOpen(true);
  }
  // Dialog close action
  const handleDialogClose = () => {
      // set the open state of the add-ingredient form
      setOpen(false);
  }

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Container className={classes.root} maxwidth='lg'>
        <NavBar title='Ingredients' />
        <Grow in>
          <Container className={classes.content}>
            <Grid container>
              <Grid item xs={12}>
                <Ingredients />
              </Grid>
            </Grid>
          <Fab color="primary" aria-label="add" size="medium" className={classes.addButton} onClick={handleClickOpen}>
            <AddIcon />
          </Fab>

          <IngredientDialog props={{open: open, handleDialogClose: handleDialogClose}}/>

          </Container>
        </Grow>
        
      </Container>
    </SnackbarProvider>
  )
}

export default App
