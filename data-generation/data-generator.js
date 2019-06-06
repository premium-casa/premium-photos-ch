const fs = require('fs');
const faker = require('faker');

// write.write('id, issaved, listingdesc, villa, kitchen, livingroom, bed1, bath1, lobby, bed2, office, bath2, bed3\n');
// for (let i = 0; i < 10000000; i++) {
// 	write.write((i+1) + ',' + faker.random.boolean() + ',' + faker.lorem.sentence() + ',' + faker.image.imageUrl() + ',' +
// 	faker.image.imageUrl() + ',' +
// 	faker.image.imageUrl() + ',' +
// 	faker.image.imageUrl() + ',' +
// 	faker.image.imageUrl() + ',' +
// 	faker.image.imageUrl() + ',' +
// 	faker.image.imageUrl() + ',' +
// 	faker.image.imageUrl() + ',' +
// 	faker.image.imageUrl() + ',' +
// 	faker.image.imageUrl() + '\n');
// }
async function dataGenerate() {
	const write = fs.createWriteStream('../chrisdata.csv', {
		encoding: 'utf8',
		flag: 'a'
	});

	const rooms = [
		'villa',
		'kitchen',
		'livingroom',
		'bed1',
		'bath1',
		'lobby',
		'bed2',
		'office',
		'bath2',
		'bed3'
	];
	write.write('id, issaved, url, listingdesc, listing_id, room\n');
	for (let i = 1; i <= 10; i++) {
		for (let x = 0; x < 10; x++) {
			const ableToWrite = write.write(
				((i-1) * 10 + x + 1) + ',' + false + ',' + faker.image.imageUrl(1920, 1080, 'city') + ',' + faker.lorem.sentence() + ',' + i + ',' + rooms[x] + '\n'
			);
			if (!ableToWrite) {
				await new Promise((resolve) => {
					write.once('drain', resolve);
				});
			}
		}
	}

	write.end();
	console.log('data generated successful');
}

dataGenerate();
