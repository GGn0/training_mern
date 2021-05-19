
import { Dialog, DialogContent, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useSnackbar } from 'notistack'
import React from 'react'
import IngredientForm from './ingredient_form/ingredient_form'
import useStyles from './style'

// Pass the properties from the parent. Including the function to handle the closing
const IngredientsDialog = ({ props }) => {
  // Use styles
  const classes = useStyles()

  // Notification handlers
  const { enqueueSnackbar } = useSnackbar()

  // Function to handle submit
  const handleSubmit = () => {
    // Close the dialog
    props.handleDialogClose()

    // Send a notification
    enqueueSnackbar('Ingredient added', { variant: 'success' })
    console.log('remember to edit ingredient_form and reactivate db connection')
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleDialogClose}
      aria-labelledby='max-width-dialog-title'
    >
      <DialogContent className={classes.root}>
        <IconButton aria-label='close' color='secondary' className={classes.closeButton} onClick={props.handleDialogClose}>
          <CloseIcon />
        </IconButton>
        <IngredientForm props={{ onSubmit: handleSubmit }} />
      </DialogContent>
      {/* <DialogActions>
            <Button  variant='outlined' onClick={props.handleDialogClose} color="secondary" size='large' fullWidth>Close</Button>
        </DialogActions> */}
    </Dialog>
  )
}

export default IngredientsDialog
