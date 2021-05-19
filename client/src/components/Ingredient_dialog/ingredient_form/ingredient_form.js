import React, { useState } from 'react'
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useDispatch } from 'react-redux'
import { createIngredient } from '../../../actions/ingredients'
import useStyles from './style'

const Form = ({ props }) => {
  // Use styles
  const classes = useStyles()

  // Use the state for ingredient data
  const [ingredientData, setIngredientData] = useState({
    name: '',
    ref_qt: 100,
    is_dish: false,
    kcals: 0,
    carbs: 0,
    fats: 0,
    proteins: 0,
    fibers: 0,
    sugars: 0
  })
  // State to enable/disable submit button
  const [disableUpload, setDisableUpload] = useState(true)

  // Use the dispatch
  const dispatch = useDispatch()

  // Once the data has been prepared, submit it
  const handleSubmit = (e) => {
    // Prevent refresh in the browser
    e.preventDefault()

    dispatch(createIngredient(ingredientData))

    // Call parent function to handle send
    props.onSubmit()
  }

  // When the data changes, check that every field has been filled
  const handleChange = () => {
    // Button enable conditions
    let enable
    enable = (ingredientData.name !== '')
    enable &= (ingredientData.ref_qt > 0)
    enable &= (ingredientData.kcals > 0)

    if (enable) {
      setDisableUpload(false)
    } else {
      setDisableUpload(true)
    }
  }

  // Functions to clear the form fields
  const clear = () => {

  }

  return (
    <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} onChange={handleChange}>
      <Typography variant='h6'>Add an ingredient</Typography>
      <TextField name='name' variant='outlined' label='Ingredient name' fullWidth value={ingredientData.name} onChange={(e) => setIngredientData({ ...ingredientData, name: e.target.value })} />
      <TextField name='ref_qt' variant='outlined' type='number' label='Reference quantity' InputProps={{ endAdornment: (<InputAdornment position='end'>g</InputAdornment>) }} fullWidth value={ingredientData.ref_qt} onChange={(e) => setIngredientData({ ...ingredientData, ref_qt: e.target.value })} />
      <TextField name='kcals' variant='outlined' type='number' label='Kcals' InputProps={{ endAdornment: (<InputAdornment position='end'>kcal</InputAdornment>) }} fullWidth value={ingredientData.kcals} onChange={(e) => setIngredientData({ ...ingredientData, kcals: e.target.value })} />
      <TextField name='carbs' variant='outlined' type='number' label='Carbs' InputProps={{ endAdornment: (<InputAdornment position='end'>g</InputAdornment>) }} fullWidth value={ingredientData.carbs} onChange={(e) => setIngredientData({ ...ingredientData, carbs: e.target.value })} />
      <TextField name='fats' variant='outlined' type='number' label='Fats' InputProps={{ endAdornment: (<InputAdornment position='end'>g</InputAdornment>) }} fullWidth value={ingredientData.fats} onChange={(e) => setIngredientData({ ...ingredientData, fats: e.target.value })} />
      <TextField name='proteins' variant='outlined' type='number' label='Proteins' InputProps={{ endAdornment: (<InputAdornment position='end'>g</InputAdornment>) }} fullWidth value={ingredientData.proteins} onChange={(e) => setIngredientData({ ...ingredientData, proteins: e.target.value })} />
      <TextField name='fibers' variant='outlined' type='number' label='Fibers' InputProps={{ endAdornment: (<InputAdornment position='end'>g</InputAdornment>) }} fullWidth value={ingredientData.fibers} onChange={(e) => setIngredientData({ ...ingredientData, fibers: e.target.value })} />
      <TextField name='sugars' variant='outlined' type='number' label='Sugars' InputProps={{ endAdornment: (<InputAdornment position='end'>g</InputAdornment>) }} fullWidth value={ingredientData.sugars} onChange={(e) => setIngredientData({ ...ingredientData, sugars: e.target.value })} />
      <FormControlLabel name='is_dish' label='Available as dish?' control={<Checkbox color='primary' checked={ingredientData.is_dish} onChange={(e) => setIngredientData({ ...ingredientData, is_dish: e.target.checked })} />} />
      <Button className={classes.buttonSubmit} variant='contained' type='submit' color='primary' size='large' fullWidth disabled={disableUpload}>Create</Button>
      <Button variant='contained' onClick={clear} color='secondary' size='large' fullWidth>Clear</Button>
    </form>
  )
}

export default Form
