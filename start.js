const express = require('express');
const app = express();
app.use(express.json());
const port = 3001;
const host = '0.0.0.0';
app.get('/users', (req, res) => {
    res.json({ olaaaa: 'rseis do sexo' })
})
app.listen(port, host);