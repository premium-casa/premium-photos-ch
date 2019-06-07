const fs = require('fs');
const path = require('path');

// Read directory

fs.readdir('./build/webp', (err, files) => {
  let count = 1;
  // Cicle files on current folder
  for (const file of files) {
    // Test regular expression
    console.log(file);
    // Add more logic to rename file
    const oldPath = path.join(__dirname, `/build/webp/${file}`);
    const newPath = path.join(__dirname, `/build/renamed/img-${count}.webp`);
    fs.renameSync(oldPath, newPath, (err) => {
      console.log('Renaming', file, "to", "newFile.txt");
      if (err) throw err;
    });
    count++;
  }
});
