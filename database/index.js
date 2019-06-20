// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true, useCreateIndex: true });

// // Schema
// const listingSchema = mongoose.Schema({
//   listingID: { type: Number, unique: true },
//   listingDesc: String,
//   isSaved: Boolean,
//   listingPhotos: [{ url: String, desc: String, isVerified: Boolean }],
// });

// // Listing model
// const Listing = mongoose.model('Listing', listingSchema);

// // Get photos from DB.
// const getPhotos = (targetID, callback) => {
//   Listing.find({ listingID: targetID }, (err, photos) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, photos);
//     }
//   });
// };

// module.exports = {
//   Listing,
//   getPhotos,
// };

const { Pool } = require('pg');

const pool = new Pool({
	user: 'Chris',
	host: 'localhost',
	database: 'photos',
	port: 5432
});

pool.query('SELECT NOW()', (err, res) => {
	if (err) {
		console.log(err);
	}
	console.log('Successfully connected to postgres database!');
});

// const getPhotos = (req, res) => {
// 	pool.query(
// 		`select description, issaved, room_description, url, isverified from listing inner join photos on listing.id=photos.listing_id and listing.id=${
// 			req.params.listingId
// 		};`,
// 		(err, result) => {
// 			if (err) {
// 				res.status(404).send(err);
// 			}
// 			let data = {};
// 			data.listingDesc = result.rows[0].description;
// 			data.isSaved = JSON.parse(result.rows[0].issaved);
// 			data.listingPhotos = [];
// 			result.rows.forEach((listing) => {
// 				data.listingPhotos.push({
// 					url: listing.url,
// 					desc: listing.room_description,
// 					isVerified: JSON.parse(listing.isverified)
// 				});
// 			});
// 			res.status(200).send(data);
// 		}
// 	);
// };

const getPhotos = (targetId, callback) => {
	pool.query(
		`select description, issaved, room_description, url, isverified from listing inner join photos on listing.id=photos.listing_id and listing.id=${
			targetId
		};`,
		(err, result) => {
			// if (err) {
			// 	callback(err)
			// }
			// let data = {};
			// data.listingDesc = result.rows[0].description;
			// data.issaved = result.rows[0].issaved;
			// data.listingPhotos = [];
			// result.rows.forEach((listing) => {
			// 	data.listingPhotos.push({
			// 		url: listing.url,
			// 		desc: listing.room_description,
			// 		isVerified: listing.isverified
			// 	});
			// });
			callback(null,result)
		}
	);
};

const addPhotos = (req, res) => {
	const data = req.body;
	const query = {
		text:
			'insert into photos (id, room_description, url, isverified, date, listing_id) values ($1, $2, $3, $4, $5, $6)',
		values: [
			data.id,
			data.room_description,
			data.url,
			data.isverified,
			data.date,
			data.listing_id
		]
	};
	pool.query(query, (err, result)=>{
		if (err) {
			res.status(404).send();
		}
		res.status(200).send(result);
	})
};

const deletePhotos = (photoId, callback) => {
	pool
		.query(`delete from photos where id=${photoId}`)
		.then((res) => {
			callback(null, 'Successfully Deleted Data from Database');
		})
		.catch((err) => {
			callback(err);
		});
};

const updatePhotos = (data, callback) => {
	const query = {
		text: 'update photos set url = $1 where id=$2;',
		values: [data.url, data.id]
	};
	pool
		.query(query)
		.then((res) => {
			callback(null, 'Your data has been successfully updated');
		})
		.catch((err) => {
			callback(err);
		});
};

module.exports = {
	getPhotos,
	deletePhotos,
	addPhotos,
	updatePhotos
};
