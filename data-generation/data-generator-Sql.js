const fs = require('fs');
const faker = require('faker');

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

async function dataGenerate() {
	// const write = fs.createWriteStream('/Volumes/Samsung_T5/listing-sql1.csv', {
	// 	encoding: 'utf8',
	// 	flag: 'a'
	// });
	// const write2 = fs.createWriteStream('/Volumes/Samsung_T5/photos-sql2.csv', {
	// 	encoding: 'utf8',
	// 	flag: 'a'
	// });
	

	// write.write('id, host, listingdesc, isSaved, location\n');
	// 	for (let x = 1; x <= 10000000; x++) {
	// 		const ableToWrite = write.write(
	// 			( x + '|' + faker.name.findName() + '|' + faker.lorem.sentence() + '|' + 0 + '|' + faker.address.county() + '\n'));
	// 		if (!ableToWrite) {
	// 			await new Promise((resolve) => {
	// 				write.once('drain', resolve);
	// 			});
	// 		}
	// 	}
	const write2 = fs.createWriteStream('/Volumes/Samsung_T5/sql-photos1/photos-sql2.txt', {
		encoding: 'utf8',
		flag: 'a'
	});

	write2.write('id, description, url, isverified, listing_id\n');
	for (let x = 1; x <= 37500000; x++) {
		const ableToWrite2 = write2.write(
			(x + '|' + faker.lorem.sentence() + '|' + `https://exzerone-photos.s3.amazonaws.com/img-${randomNum(1, 1085)}.webp` + '|' + randomNum(0, 1) + '|' + randomNum(1, 10000000) + '\n' ));
		if (!ableToWrite2) {
			await new Promise((resolve) => {
				write2.once('drain', resolve);
			});
		}
	}
	
	write2.end();
	console.log('write 2 data generated successful');

	const write3 = fs.createWriteStream('/Volumes/Samsung_T5/sql-photos1/photos-sql3.txt', {
		encoding: 'utf8',
		flag: 'a'
	});

	write3.write('id, description, url, isverified, listing_id\n');
	for (let x = 37500001; x <= 75000000; x++) {
		const ableToWrite3 = write3.write(
			(x + '|' + faker.lorem.sentence() + '|' + `https://exzerone-photos.s3.amazonaws.com/img-${randomNum(1, 1085)}.webp` + '|' + randomNum(0, 1) + '|' + randomNum(1, 10000000) + '\n' ));
		if (!ableToWrite3) {
			await new Promise((resolve) => {
				write3.once('drain', resolve);
			});
		}
	}

	write3.end();
	console.log('write 3 data generated successful');

	const write4 = fs.createWriteStream('/Volumes/Samsung_T5/sql-photos1/photos-sql4.txt', {
		encoding: 'utf8',
		flag: 'a'
	});

	write4.write('id, description, url, isverified, listing_id\n');
	for (let x = 75000001; x <= 112500000; x++) {
		const ableToWrite4 = write4.write(
			(x + '|' + faker.lorem.sentence() + '|' + `https://exzerone-photos.s3.amazonaws.com/img-${randomNum(1, 1085)}.webp` + '|' + randomNum(0, 1) + '|' + randomNum(1, 10000000) + '\n' ));
		if (!ableToWrite4) {
			await new Promise((resolve) => {
				write4.once('drain', resolve);
			});
		}
	}

	write4.end();
	console.log('write 4 data generated successful');

	const write5 = fs.createWriteStream('/Volumes/Samsung_T5/sql-photos1/photos-sql5.txt', {
		encoding: 'utf8',
		flag: 'a'
	});

	write5.write('id, description, url, isverified, listing_id\n');
	for (let x = 112500001; x <= 150000000; x++) {
		const ableToWrite5 = write5.write(
			(x + '|' + faker.lorem.sentence() + '|' + `https://exzerone-photos.s3.amazonaws.com/img-${randomNum(1, 1085)}.webp` + '|' + randomNum(0, 1) + '|' + randomNum(1, 10000000) + '\n' ));
		if (!ableToWrite5) {
			await new Promise((resolve) => {
				write5.once('drain', resolve);
			});
		}
	}

	write5.end();
	console.log('write 5 data generated successful');

	// write.end();
	// write2.end();
	// console.log('data generated successful');
}

dataGenerate();
