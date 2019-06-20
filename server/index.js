require('newrelic');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postgres = require('../database/index.js');
const redis = require('redis');
const responseTime = require('response-time');
const PORT = 3001;

const app = express();
const client = redis.createClient();

// client.on('error', (err) => {
// 	console.log('Error ' + err);
// });

client.on('connect', function() {
	console.log('Connected to Redis');
});

app.use(responseTime());
app.use(express.static('public/dist/'));
app.use(cors());
app.use(bodyParser.json());

app.get('/photos/:listingId', (req, res) => {
	client.get(req.params.listingId, (err, result) => {
		if (result) {
			res.status.length(200).send(JSON.parse(reuslt));
		} else {
			postgres.getPhotos(req.params.listingId, (err, results) => {
				if (err) {
					res.status(404).send();
				} else {
					client.set(req.params.listingId, JSON.stringify(results), () => {
						res.status(200).send(results);
					});
				}
			});
		}
	});
	// client.hgetall(req.params.listingId, (err, result) => {
	// 	if (result) {
	// 		// console.log('cached');
	// 		return res.status(200).send(result);
	// 	} else {
	// 		postgres.getPhotos(req.params.listingId, (err, result) => {
	// 			if (err) {
	// 				res.status(404).send();
	// 			}
	// 			client.hmset(req.params.listingId, {
	// 				issaved: result.issaved,
	// 				listingDesc: result.listingDesc,
	// 				listingPhotos: JSON.stringify(result.listingPhotos)
	// 			});
	// 			// console.log('uncached result', result);
	// 			res.status(200).send(result);
	// 		});
	// 	}
	// });
});

app.post('/photos', postgres.addPhotos);

// app.delete('/:photoId', (req, res) => {
// 	// const photoID = req.params.photoId;
// 	db.deletePhotos(photoID, (err, result) => {
// 		if (err) {
// 			res.status(500).send();
// 		} else {
// 			res.status(200).send('Photo has successfully been deleted');
// 		}
// 	});
// });

// app.post('/:listingId', (req, res) => {
// 	const data = req.body;
// 	db.addPhotos(data, (err, result) => {
// 		if (err) {
// 			res.status(500).send();
// 		} else {
// 			res.status(200).send(result);
// 		}
// 	});
// });

// app.put('/:listingId', (req, res)=>{
// 	const data = req.body;
// 	db.updatePhotos(data, (err, result)=>{
// 		if (err) {
// 			res.status(500).send();
// 		} else {
// 			res.status(200).send(result)
// 		}
// 	})
// })

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
