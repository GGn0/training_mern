import React from 'react'
import Ingredient from './ingredient/ingredient.js'

const Ingredients = () => {
  return (
  // React fragment
    <>
      <h1>Ingredients list</h1>
      <Ingredient />
      <Ingredient />
    </>
  )
}

export default Ingredients
