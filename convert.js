"use strict";

const fs = require('fs');
const jimp = require('jimp');
const DataStore = require('nedb');

const db = new DataStore({
    filename: 'images.nedb',
    autoload: true, 
});

db.remove({}, {multi: true}, function(err, numOfRemoved) {
    if(err) throw err;
})
fs.readdir("IMAGES/", function(err, files) {
    if(err) throw err;
    // console.log(files);
    files.forEach(function (fileName) {
        console.log(fileName);
        jimp.read(`IMAGES/${fileName}`, function(err, image) {
            //console.log(image);
            // const width = image.bitmap.width;
            //const height = image.bitmap.height;
            const {width, height} = image.bitmap;
            db.insert({fileName, width, height}, function (err, insertedImage) {
                console.log(insertedImage);
                image.resize(100,jimp.AUTO);
                image.write(`IMAGES/${insertedImage._id}.jpg`, function(err, feldolgozottFiles) {
                    console.log(fileName, 'feldolgozva');
              })
          })
        })
    })
});