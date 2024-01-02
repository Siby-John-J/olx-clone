const express = require('express')
const cors = require("cors")
const app = express()
const {getUser, setUser, checkLogin, logout} = require('./controllers/userController')
const { setProduct, getProduct, getSingleProduct } = require('./controllers/productController')
const { upload } = require('./controllers/multer')

app.use(cors())
app.use(express.json())
app.use('/images', express.static('src/controllers/images'))

app.post('/sign_in', getUser)
app.post('/sign_up', setUser)


app.get('/getLogin', checkLogin)
app.get('/logout', logout)

app.post('/post_product', upload.single('image'), setProduct)
app.get('/get_products', getProduct)

app.get('/:product', getSingleProduct)

app.listen(2000)
