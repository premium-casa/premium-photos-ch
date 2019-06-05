const fs = require('fs');
const faker = require('faker');

const write = fs.createWriteStream('../chrisdata5.csv', {
	encoding: 'utf8',
	flag: 'a'
});
write.write('id, issaved, listingdesc, villa, kitchen, livingroom, bed1, bath1, lobby, bed2, office, bath2, bed3\n');
for (let i = 0; i < 10000000; i++) {
	write.write((i+1) + ',' + faker.random.boolean() + ',' + faker.lorem.sentence() + ',' + faker.image.imageUrl() + ',' +
	faker.image.imageUrl() + ',' +
	faker.image.imageUrl() + ',' +
	faker.image.imageUrl() + ',' +
	faker.image.imageUrl() + ',' +
	faker.image.imageUrl() + ',' +
	faker.image.imageUrl() + ',' +
	faker.image.imageUrl() + ',' +
	faker.image.imageUrl() + ',' +
	faker.image.imageUrl() + '\n');
}

write.end();
console.log('data generated successful');
