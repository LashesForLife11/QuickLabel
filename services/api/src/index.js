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
    new Promise(resolve => {
        const stream = [];

        fs.createReadStream(fileName)
            .pipe(csv())
            .on('data', data => stream.push(data))
            .on('end', () => {
                resolve(stream);
            });
    });

app.post('/api/orders', upload.single('file'), async (req, res) => {
    if (!req.file  || !req.file.path) {
        return res.json({ status: 404, data: null });
    }

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

    res.json({ status: 200, data: orders });
});

app.get('/favicon.*', (_, res) => {
    res.sendStatus(204);
});

app.listen(port);

console.log('Frontend: http://localhost:' + port);
