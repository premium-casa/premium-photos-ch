const fs = require('fs');
const faker = require('faker');
// const randomNum = (min, max) =>
// 	Math.floor(Math.random() * (max - min + 1) + min);
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

const roomGenerate = function() {
	let result = '';
	for (let i = 0; i < rooms.length; i++) {
		if (i !== rooms.length - 1) {
			result +=
				rooms[i] + ': ' + faker.image.imageUrl(1920, 1080, 'city') + ', ';
		} else {
			result += rooms[i] + ': ' + faker.image.imageUrl(1920, 1080, 'city');
		}
	}
	return result;
};

	write.write('id, issaved, listingdesc, photos\n');
	for (let i = 1; i <= 10000000; i++) {
			const ableToWrite = write.write(
				(i+1) + '|' + false + '|' + faker.lorem.sentence() + '|' + '{' + roomGenerate() + '}' + '\n'
			);
			if (!ableToWrite) {
				await new Promise((resolve) => {
					write.once('drain', resolve);
				});
			}

	}

	write.end();
	console.log('data generated successful');
}

dataGenerate();

