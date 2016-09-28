"use strict";

// nodemon

const fs = require('fs');
const jimp = require('jimp');
const DataStore = require('nedb-promise');
const co = require('co');

const db = new DataStore({
    filename: 'images.nedb',
    autoload: true, 
});

function readdir(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, files) {
        if(err) throw err;
        resolve(files);
    });
});
};

co(function* () {
    try {
        const numRemoved = yield db.remove({}, {multi:true});
        console.log(numRemoved, 'torolve');
        const files = yield readdir("IMAGES");
        yield Promise.all(files.map(co.wrap(function* (fileName) {            
            const image = yield jimp.read(`IMAGES/${fileName}`); 
            const {width, height} = image.bitmap;
            const insertedImage = yield db.insert({fileName, width, height});
            image.resize(100,jimp.AUTO);
            image.write(`CIMAGES/${insertedImage._id}.png`);
            console.log(fileName, "feldolgozva");
        })));
        console.log('Vége');
    } catch(err) {
        console.log(err);
    }
});