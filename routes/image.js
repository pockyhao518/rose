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
        // initialize stream
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

                newImage.save()
                    .then((image) => {
                        res.status(200).json({
                            success: true,
                            image,
                        });
                    })
                    .catch(err => res.status(500).json(err));
            })
            .catch(err => req.status(500).json(err))
    })

    imageRouter.route('/files')
        .get((req, res, next) => {
            gfs.find().toArray((err, files) => {
                if (!files || files.length === 0) {
                    return res.status(200).json({
                        success: false,
                        message: 'No files available'
                    });
                }

                files.map(file => {
                    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'image/svg') {
                        file.isImage = true;
                    } else {
                        file.isImage = false;
                    }
                });

                res.status(200).json({
                    success: true,
                    files,
                });
            });
        });

    imageRouter.route('/file/:filename')
        .get((req, res, next) => {
            gfs.find({ filename: req.params.filename }).toArray((err, files) => {
                if (!files[0] || files.length === 0) {
                    return res.status(200).json({
                        success: false,
                        message: 'No files available',
                    });
                }

                res.status(200).json({
                    success: true,
                    file: files[0],
                });
            });
        });

    return imageRouter;
};