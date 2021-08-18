const path = require('path');
const fs = require('fs');

const mkDirPath = path.join(__dirname,'18_00');
const mkDirPath2 = path.join(__dirname,'20_00');

fs.mkdir(mkDirPath,{recursive:true}, err => {
    console.log(err);
});

fs.mkdir(mkDirPath2,{recursive:true}, err => {
    console.log(err);
});

const file1Path = path.join(__dirname, '18_00', 'file1.txt');
const file2Path = path.join(__dirname, '18_00', 'file2.txt');
const file3Path = path.join(__dirname, '18_00', 'file3.txt');
const file4Path = path.join(__dirname, '20_00', 'file4.txt');
const file5Path = path.join(__dirname, '20_00', 'file5.txt');
const file6Path = path.join(__dirname, '20_00', 'file6.txt');

fs.writeFile(file1Path, 'name: Vova, gender: male', err => {
    console.log(err);
});

fs.writeFile(file2Path, 'name: Max, gender: male', err => {
    console.log(err);
});

fs.writeFile(file3Path, 'name: Nazar, gender: male', err => {
    console.log(err);
});

fs.writeFile(file4Path, 'name: Inna, gender: female', err => {
    console.log(err);
});

fs.writeFile(file5Path, 'name: Bohdana, gender: female', err => {
    console.log(err);
});

fs.writeFile(file6Path, 'name: Larisa, gender: female', err => {
    console.log(err);
});



const femaleFolder = path.join(__dirname,'18_00', 'female.txt');
const femaleFolder2 = path.join(__dirname,'18_00', 'female2.txt');
const femaleFolder3 = path.join(__dirname,'18_00', 'female3.txt');

fs.rename (file4Path, femaleFolder, err => {
    console.log(err);
});
fs.rename (file5Path, femaleFolder2, err => {
    console.log(err);
});
fs.rename (file6Path, femaleFolder3, err => {
    console.log(err);
});


const maleFolder = path.join(__dirname,'20_00', 'male.txt');
const maleFolder2 = path.join(__dirname,'20_00', 'male2.txt');
const maleFolder3 = path.join(__dirname,'20_00', 'male3.txt');

fs.rename (file1Path, maleFolder, err => {
    console.log(err);
});
fs.rename (file2Path, maleFolder2, err => {
    console.log(err);
});
fs.rename (file3Path, maleFolder3, err => {
    console.log(err);
});




