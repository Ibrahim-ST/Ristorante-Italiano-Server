const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data/chefData.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('ristorante italiano running');
})

app.get('/chefdata', (req, res) => {
    res.send(chefData);
})

app.get('/chefdata/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedData = chefData.find(d=> d.id===id);
    console.log(selectedData);
})

app.listen(port, () => {
    console.log(`Ristorante Italiano running on port ${port}`);
})