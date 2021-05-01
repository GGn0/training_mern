// Controllers keep the logic separated from the routes
// This is to make the application more scalable

// not exporting as default. it will be imported by name with { }
export const getIngredients = (req, res) => {
    res.send('Working');
}