const express = require('express');
const app = express();
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => console.log('App is running on port ' + PORT))



