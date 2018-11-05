const express = require('express')
const bodyParser = require('body-parser')

app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello Express!',
    });
});

app.post('/', (req, res) => {
    res.json({
        'result': Number(req.body.a) + 1,
    });
});

app.listen(3000, () => {
    console.log('Server application successfully initiated on port 3000');
});
