const cassandra = require('cassandra-driver');
const assert = require('assert');

const client = new cassandra.Client({
	contactPoints: ['localhost'],
	localDataCenter: 'datacenter1'
});

client.connect(function(err) {
	assert.ifError(err);
});

const query = 'SELECT photos from photos.listings where id=2;';
client.execute(query, function(err, result) {
	if (err) {
		console.log(err);
	}
	//The row is an Object with column names as property keys.

	const array = JSON.parse(result.rows[0].photos);
	for (let i = 0; i < array.length; i++) {
		console.log(array[i].url);
	}
});

