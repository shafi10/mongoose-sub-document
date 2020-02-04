const express = require('express')
const router = express.Router()

const {getData , postData, findData} = require('../controllers/data')

router.get('/', getData)
router.post('/', postData)
router.get('/find', findData)


module.exports = router