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

const { Pool, Client } = require('pg');

const pool = new Pool({
	user: 'Chris',
	host: 'localhost',
	database: 'photos',
	password: '',
	port: 5432
});

pool.connect();
pool
	.query('SELECT NOW()')
	.then((res) => {
		console.log('Successfully connected to postgres database!');
	})
	.catch((err) => {
		console.log(
			'There is an error connecting to postgresql with error: ' + err
		);
	});

const getPhotos = (targetId, callback) => {
	pool
		.query(
			`select * from listing inner join photos on listing.id=photos.listing_id and listing.id=${targetId};`
		)
		.then((res) => {
			let data = {};
			data.listingDesc = res.rows[0].description;
			data.isSaved = JSON.parse(res.rows[0].issaved);
			data.listingPhotos = [];
			res.rows.forEach((listing) => {
				data.listingPhotos.push({
					url: listing.url,
					desc: listing.room_description,
					isVerified: JSON.parse(listing.isverified)
				});
			});
			callback(null, data);
		})
		.catch((err) => {
			callback(err);
		});
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

const addPhotos = (data, callback) => {
	const query = {
		text:'insert into photos (id, room_description, url, isverified, date, listing_id) values ($1, $2, $3, $4, $5, $6)',
		values : [data.id, data.room_description, data.url, data.isverified, data.date, data.listing_id]
	}
	pool
	.query(query)
	.then((res)=>{
		callback(null, 'Successfully Inserted Data to Database')
	})
	.catch((err)=>{
		callback(err)
	})
}

const updatePhotos = (data, callback) => {
	const query = {
		text: 'update photos set url = $1 where id=$2;',
		values: [data.url, data.id]
	}
	pool
	.query(query)
	.then((res)=>{
		callback(null, 'Your data has been successfully updated')
	})
	.catch(err=>{
		callback(err)
	})
}


module.exports = {
	getPhotos,
	deletePhotos,
	addPhotos,
	updatePhotos
};
