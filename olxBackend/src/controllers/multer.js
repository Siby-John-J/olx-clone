const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        // console.log(__dirname)
        cb(null, __dirname + '/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

module.exports = {upload}