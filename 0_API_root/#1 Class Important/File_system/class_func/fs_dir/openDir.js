const fs =require('fs')

fs.open('./text.txt','r', (err,fd) => {
    if (err) throw err;
    console.log(fd)

    fs.stat('./text.txt', (err, stats) => {
      if (err) throw err;

      console.log(`stats: ${JSON.stringify(stats)}`);
    });
})

