const express = require('express')
const app = express()
const port = 5000;

app.get('/', (req, res) => {
    res.send('ristorante italiano running');
})

app.listen(port, () => {
    console.log(`Ristorante Italiano running on port ${port}`);
})