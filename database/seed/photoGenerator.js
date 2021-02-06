const fs = require('fs')
const path = require('path');
const faker = require('faker')

const lines = 901;
let listing_id = 101;
const filePath = path.join(__dirname, 'CSV');
const stream = fs.createWriteStream(`${filePath}/photos.csv`);

const createPost = (i) => {
  const roomTypes = ['Living area', 'Full kitchen', 'Dining room', 'Full bathroom', 'Bedroom Area', 'Entry', 'Exterior', 'Patio'];
  const random = Math.floor(Math.random() * (1000 - 1) + 1);
  const largePics = `https://sdc-thumbnail-photos.s3.amazonaws.com/thumbnailPhotos/image${random}.jpg`;
  const thumbnails = `https://sdc-large-photos.s3.amazonaws.com/largePhotos/image${random}.jpg`;
  const description = faker.lorem.sentence();
  const room = roomTypes[Math.floor(Math.random() * (roomTypes.length - 1))];

  const record = `${i}, ${listing_id}, ${largePics}, ${thumbnails}, ${description}, ${room}`;

  if (i % 9 === 0 ) {
    console.log(`process: ${100 - (i / 9)}%`)
  }

  return `${record}\n`
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines

  function writing(){
    let canWrite = true
    do {
      i--
      if (i % 9 === 0){
        listing_id --;
      }

      let post = createPost(i)
      //check if i === 0 so we would write and call `done`
      if(i === 1){
        // we are done so fire callback
        writeStream.write(post, encoding, done)
      }else{
        // we are not done so don't fire callback
        writeStream.write(post, encoding)
      }
      //else call write and continue looping
    } while(i > 1 && canWrite)
    if(i > 0 && !canWrite){
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing()
}

//write our `header` line before we invoke the loop
stream.write(`photos_id, listing_id, thumbnail_url, image_url, photo_description, room \n`, 'utf-8')
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end()
})

