const express = require("express");
const app = express();
const path = require('path');
mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const datas = require("./routes/api/datas");
const imageRouter = require('./routes/api/image');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const crypto = require('crypto');
const methodOverride = require('method-override');

// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}



mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
const connect = mongoose.createConnection(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    let gfs;

connect.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(connect.db, {
        bucketName: 'uploads'
    })
})

const storage = new GridFsStorage({
    url: db,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

// app.get("/", (req, res) => res.send("Hello World"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/api/datas", datas);

const upload = multer({ storage });
app.use('/api/image', imageRouter(upload));
