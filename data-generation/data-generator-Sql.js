const fs = require('fs');
const faker = require('faker');

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

async function dataGenerate() {
	const write = fs.createWriteStream('listing-sql.csv', {
		encoding: 'utf8',
		flag: 'a'
	});
	// const write2 = fs.createWriteStream('/Volumes/Samsung_T5/photos-sql1.csv', {
	// 	encoding: 'utf8',
	// 	flag: 'a'
	// });
	

	write.write('id, host, listingdesc, isSaved, location\n');
		for (let x = 1; x <= 10000000; x++) {
			const ableToWrite = write.write(
				( x + '|' + faker.name.findName() + '|' + faker.lorem.sentence() + '|' + false + '|' + faker.address.county() + '\n'));
			if (!ableToWrite) {
				await new Promise((resolve) => {
					write.once('drain', resolve);
				});
			}
		}
	
	// write2.write('id, description, url, isverified, date, listing_id\n');
	// for (let x = 1; x <= 275000000; x++) {
	// 	const ableToWrite2 = write2.write(
	// 		(x + '|' + faker.lorem.sentence() + '|' + `https://exzerone-photos.s3.amazonaws.com/img-${randomNum(1, 1085)}.webp` + '|' + faker.random.boolean() + '|' +  faker.date.past() + '|' + randomNum(1, 10000000) + '\n' ));
	// 	if (!ableToWrite2) {
	// 		await new Promise((resolve) => {
	// 			write2.once('drain', resolve);
	// 		});
	// 	}
	// }

	write.end();
	// write2.end();
	console.log('data generated successful');
}

dataGenerate();
