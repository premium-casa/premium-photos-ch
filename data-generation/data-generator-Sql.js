const fs = require('fs');
const faker = require('faker');

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

async function dataGenerate() {
	const write = fs.createWriteStream('../maria.csv', {
		encoding: 'utf8',
		flag: 'a'
	});
	const write2 = fs.createWriteStream('../photos-sql1.csv', {
		encoding: 'utf8',
		flag: 'a'
	});
	

	write.write('id, host, location\n');
		for (let x = 0; x < 10000000; x++) {
			const ableToWrite = write.write(
				( x+1 + '|' + faker.name.findName() + '|' + faker.address.county() + '\n'));
			if (!ableToWrite) {
				await new Promise((resolve) => {
					write.once('drain', resolve);
				});
			}
		}
	
	write2.write('id, description, url, isverified, date, listing_id\n');
	for (let x = 1; x <= 10; x++) {
		const ableToWrite2 = write2.write(
			(x + '|' + faker.lorem.sentence() + '|' + `https://exzerone-photos.s3.amazonaws.com/img-${randomNum(1, 1085)}.webp` + '|' + faker.random.boolean() + '|' +  faker.date.past() + '|' + randomNum(1, 10000000) + '\n' ));
		if (!ableToWrite2) {
			await new Promise((resolve) => {
				write2.once('drain', resolve);
			});
		}
	}

	write.end();
	write2.end();
	console.log('data generated successful');
}

dataGenerate();
