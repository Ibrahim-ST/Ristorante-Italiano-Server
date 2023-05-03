const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');
const recipe = require('./data/chefData.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('ristorante italiano running');
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedRecipe = recipe.find(r => r.id === id);
    res.send(selectedRecipe);
})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    if (id === 0) {
        res.send(recipe);
    }
    else{
        const selectedRecipe = recipe.filter(r=> parseInt(r.id)===id);
        res.send(selectedRecipe);
    }
})

app.listen(port, () => {
    console.log(`Ristorante Italiano running on port ${port}`);
})