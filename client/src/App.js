import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getIngredients } from './actions/ingredients';
import Ingredients from './components/ingredients/ingredients.js'
import IngredientForm from './components/ingredient_form/ingredient_form.js'
import IngredientsImg from './images/ingredients.png';

// This component is a functional component
const App = () => {

    // Create a hook
    const dispatch = useDispatch();

    // useEffect
    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <Container maxwidth='lg'>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Ingredients
                </Typography>
                <img src={IngredientsImg} alt="ingredients" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
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
    );
}

export default App