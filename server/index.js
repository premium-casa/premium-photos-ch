const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

const PORT = 3001;

app.use(express.static('public/dist/'));

app.use(cors());
app.use(bodyParser.json());

app.get('/photos/:listingID', (req, res) => {
	const targetID = req.params.listingID;
	db.getPhotos(targetID, (err, photos) => {
		if (err) {
			res.status(500).send();
		} else {
			res.status(200).send(photos);
		}
	});
});

app.post('/photos/:listingID', (req, res) => {
	const targetID = req.params.listingID;
	db.getPhotos(targetID, (err, photos) => {
		if (err) {
			res.status(500).send();
		} else {
			res.status(200).send(photos);
		}
	});
});

app.delete('/photos/:listingID', (req, res) => {
	const targetID = req.params.listingID;
	db.getPhotos(targetID, (err, photos) => {
		if (err) {
			res.status(500).send();
		} else {
			res.status(200).send(photos);
		}
	});
});

app.put('/photos/:listingID', (req, res) => {
	const targetID = req.params.listingID;
	db.getPhotos(targetID, (err, photos) => {
		if (err) {
			res.status(500).send();
		} else {
			res.status(200).send(photos);
		}
	});
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
