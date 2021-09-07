const express = require('express');
const act2 = express();
const port = 3019;
act2.get('/', (req, res) => {
    res.send ('¡Bienvenidos usuarios de la Salud!');
})

act2.listen(port,() => {
    console.log(`http://localhost:${port}`);
})
