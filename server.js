const path = require('path');
const express = require('express');

const indexPath = path.join(__dirname, 'index.html');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.listen(3000, () => {
    
});