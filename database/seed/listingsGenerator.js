const fs = require('fs');
const path = require('path');
const faker = require('faker');

const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/listings.csv`);
ws.write(`listing_id, name, description\n`, 'utf-8')

for (let i = 1; i <= 100; i += 1) {
  const name = faker.lorem.sentence();
  const description = faker.lorem.sentence();
  const record = `${i}, ${name}, ${description}`;
  ws.write(`${record}\n`, 'utf-8');

  if (i % 100000 === 0 ) {
    console.log(`process: ${i / 100000}%`)
  }
}
ws.end();

