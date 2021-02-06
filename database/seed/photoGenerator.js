const fs = require('fs');
const path = require('path');
const faker = require('faker');

const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/homePhotos.csv`);
ws.write(`picid, fkitemid, largePics, thumbnails\n`, 'utf-8')

let itemid = 1;
for (let i = 1; i <= 100; i += 1) {
  const roomTypes = ['Living area', 'Full kitchen', 'Dining room', 'Full bathroom', 'Bedroom Area', 'Entry', 'Exterior', 'Patio'];
  const random = Math.floor(Math.random() * (1000 - 1) + 1);
  const largePics = `https://sdc-thumbnail-photos.s3.amazonaws.com/thumbnailPhotos/image${random}.jpg`;
  const thumbnails = `https://sdc-large-photos.s3.amazonaws.com/largePhotos/image${random}.jpg`;
  const description = faker.lorem.sentence();
  const room = roomTypes[Math.floor(Math.random() * (roomTypes.length - 1))];
  const record = `${i}, ${itemid}, ${largePics}, ${thumbnails}, ${description}, ${room}`;
  ws.write(`${record}\n`, 'utf-8');
  if (i % 9 === 0) {
    itemid += 1;
  }
  if (i % 100000 === 0 ) {
    console.log(`process: ${i / 100000}%`)
  }
}
ws.end();
