import React from 'react';
import Ingredient from './ingredient/ingredient.js'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Ingredients = () => {
    return (
        // React fragment
        <>
            <h1>Ingredients component</h1>
            <Ingredient />
            <Ingredient />
        </>
    );
}

export default Ingredients