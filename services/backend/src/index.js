const express = require('express');
const csv = require('csv-parser');
const multer = require('multer');
const fs = require('fs');
var cors = require('cors');

const port = 9090;
const app = express();
const upload = multer({ dest: 'tmp' });

app.use(cors());

const readFile = fileName =>
    new Promise((resolve) => {
        const stream = [];

        fs.createReadStream(fileName)
            .pipe(csv())
            .on('data', data => stream.push(data))
            .on('end', () => {
                resolve(stream);
            });
    });

app.post('/api/csv', upload.single('file'), async (req, res) => {
    const fileContents = await readFile(req.file.path);
    const orders = [];

    for (let i = 0; i < fileContents.length; i++) {
        const keys = Object.keys(fileContents[i])[0].split(';');
        const values = Object.values(fileContents[i])[0].split(';');

        const orderInfo = {};
        for (let i = 0; i < keys.length; i++) {
            orderInfo[keys[i]] = values[i];
        }
        orders.push(orderInfo);
    }
    fs.unlinkSync(req.file.path);

    res.json(orders);
});

app.get('/favicon.*', (_, res) => {
    res.sendStatus(204);
});

app.listen(port);

console.log('Frontend: http://localhost:' + port);
