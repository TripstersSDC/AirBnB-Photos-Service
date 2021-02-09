const fs = require('fs')
const path = require('path');
const faker = require('faker')

const lines = 101;
const filePath = path.join(__dirname, 'CSV');
const stream = fs.createWriteStream(`${filePath}/listings.csv`);

const createPost = (i) => {
  const name = faker.lorem.sentence();
  const description = faker.lorem.sentence();
  const record = `${i}, ${name}, ${description}`;

  if (i % 1 === 0 ) {
    console.log(`process: ${100 - (i / 1)}%`)
  }

  return `${record}\n`
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines

  function writing(){
    let canWrite = true
    do {
      i--

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
stream.write(`listing_id, name, description\n`, 'utf-8')
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end()
})

