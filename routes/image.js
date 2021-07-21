const express = require('express');
const imageRouter = express.Router();
const mongoose = require('mongoose');
const Image = require('../models/image');
const config = require('../config/keys');

module.exports = (upload) => {
    const url = config.mongoURI;
    const connect = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true });

    let gfs;

    connect.once('open', () => {
        gfs = new mongoose.mongo.GridFSBucket(connect.db, {
            bucketName: "uploads"
        });
    });

imageRouter.route('/')
    .post(upload.single('file'), (req, res, next) => {
        console.log(req.body);
        Image.findOne({ caption: req.body.caption })
            .then((image) => {
                console.log(image);
                if (image) {
                    return res.status(200).json({
                        success: false,
                        message: 'Image already exists',
                    });
                }

                let newImage = new Image({
                    caption: req.body.caption,
                    filename: req.file.filename,
                    fileId: req.file.id,
                })
                let check = ['image/gif', 'image/jpeg', 'image/png'].includes(req.file.mimetype);
                console.log(check)
                if (check){
                   newImage.save()
                    .then((image) => {
                        res.status(200).json({
                            success: true,
                            image,
                        });
                    })
                    .catch(err => res.status(500).json(err)); 
                }else{
                    return res.status(200).json({
                        success: false,
                        message: 'File shoule be image',
                    });
                }
                
            })
            .catch(err => req.status(500).json(err))
    })
    return imageRouter;
};