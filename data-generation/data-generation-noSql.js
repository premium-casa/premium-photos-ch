const fs = require('fs');
const faker = require('faker');
const dateFns = require('date-fns');

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

async function dataGenerate() {
	// const write = fs.createWriteStream('/Volumes/Samsung_T5/listing-nosql.csv', {
	// 	encoding: 'utf8',
	// 	flag: 'a'
	// });
	const write2 = fs.createWriteStream('../photos-nosql1.csv', {
		encoding: 'utf8',
		flag: 'a'
	});

	
	const urlGenerate = function () {
		let result = '';
		for (let i = 0; i < randomNum(20, 30); i++) {
			const num = randomNum(1, 1085);
			if (i < 9) {
				result += '[' + `https://exzerone-photos.s3.amazonaws.com/img-${num}.webp` + ',' + randomNum(1, 100000000) + '],';
			} else {
				result += '[' + `https://exzerone-photos.s3.amazonaws.com/img-${num}.webp` + ',' + randomNum(1, 100000000) + ']';
			}
		}
		return '[' + result + ']';
	};

	// write.write('ID, Photos\n');
	// for (let i = 0; i < 10000000; i++) {
	// 	const ableToWrite = write.write(i + 1 + '|' + urlGenerate() + '\n');
	// 	if (!ableToWrite) {
	// 		await new Promise((resolve) => {
	// 			write.once('drain', resolve);
	// 		});
	// 	}
	// }

	write2.write('id, date, isverified, host, listingdesc\n');
	for (let i = 1; i <= 10; i++) {
		const ableToWrite2 = write2.write(i + '|' + faker.date.past() + '|' + faker.random.boolean() + '|' + faker.name.findName() + '|' + faker.lorem.sentence() + '\n');
		if (!ableToWrite2) {
			await new Promise((resolve1) => {
				write2.once('drain', resolve1);
			});
		}
	}

	// write.end();
	write2.end();
	console.log('data generated successful');
}

dataGenerate();
