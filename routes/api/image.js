const express = require('express');
const imageRouter = express.Router();
const mongoose = require('mongoose');
const Image = require('../../models/image');
const config = require('../../config/keys');

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
                let check = ['image/gif', 'image/jpeg', 'image/png', 'application/pdf'].includes(req.file.mimetype);
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
                        message: 'File shoule be image or pdf',
                    });
                }
                
            })
            .catch(err => req.status(500).json(err))
    })

    imageRouter.route('/image/:filename')
        .get((req, res, next) => {
            gfs.find({ filename: req.params.filename }).toArray((err, files) => {
                if (!files[0] || files.length === 0) {
                    return res.status(200).json({
                        success: false,
                        message: 'No files available',
                    });
                }

                if (files[0].contentType === 'application/pdf' || files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png' || files[0].contentType === 'image/svg+xml') {
                    // render image to browser
                    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
                } else {
                    res.status(404).json({
                        err: 'Not an image',
                    });
                }
            });
        });

    imageRouter.route('/index')
        .get((req, res, next) => {
            Image.find()
                .then((images) => {
                    res.status(200).json({
                        success: true,
                        images: images.reverse(),
                    });
                })
                .catch(err => res.status(500).json(err));
        });

    imageRouter.route('/delete/:id')
        .delete((req, res, next) => {
            Image.findOne({ _id: req.params.id })
                .then((image) => {
                    if (image) {
                        Image.deleteOne({ _id: req.params.id })
                            .then(() => {
                                return res.status(200).json({
                                    success: true,
                                    message: `File with ID: ${req.params.id} deleted`,
                                });
                            })
                            .catch(err => { return res.status(500).json(err) });
                    } else {
                        res.status(200).json({
                            success: false,
                            message: `File with ID: ${req.params.id} not found`,
                        });
                    }
                })
                .catch(err => res.status(500).json(err));
        });

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
                
                // files = files.filter(file => file.isImage === true)
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
                if (files[0].contentType === 'image/jpeg'
                ||files[0].contentType === 'image/png'
                ||files[0].contentType === 'image/svg+xml'
                ||files[0].contentType === "application/pdf"){
                    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
                }
            });
        });

    return imageRouter;
};