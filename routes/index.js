var express = require('express')
var router = express.Router()
require('dotenv').config()

var title = "Free Rest API | Online API's Tools";

  router.get('/doc/hash_identifier', (req, res) => {
    res.render('hash_ident', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/covid19', (req, res) => {
    res.render('cv19', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/ph', (req, res) => {
	  res.render('ph', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/nhentai', (req, res) => {
	  res.render('nhentai', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/randomh', (req, res) => {
	  res.render('randomh', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/randomp', (req, res) => {
	  res.render('randomp', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/tiktok', (req, res) => {
	res.render('tiktok',  {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/dicoding', (req, res) => {
    res.render('dicoding', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/nekopoi', (req, res) => {
	  res.render('nekopoi', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/tokped', (req, res) => {
    res.render('tokped', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/spam_wa', (req, res) => {
    res.render('spam_wa', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/proxy', (req, res) => {
    res.render('proxy', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/iplookup', (req, res) => {
    res.render('iplookup', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/fakename', (req, res) => {
    res.render('fakename', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/http', (req, res) => {
    res.render('http', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/userwp', (req, res) => {
    res.render('userwp', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/base64', (req, res) => {
    res.render('base64', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/base32', (req, res) => {
    res.render('base32', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/KBBI', (req, res) => {
    res.render('KBBI', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/ig', (req, res) => {
	  res.render('ig', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/cekresi', (req, res) => {
	  res.render('cekresi', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/gempa', (req, res) => {
	  res.render('gempa', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/ushort', (req, res) => {
    res.render('ushort', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/hash', (req, res) => {
    res.render('hash', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/movie', (req, res) => {
    res.render('movie', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/cur_ig', (req, res) => {
    res.render('curig', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/doc/hilih', (req, res) => {
    res.render('hilih', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/', (req, res) => {
    res.render('index', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/cuaca', (req, res) => {
	res.render('cuaca', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/nulis' , (req, res) => {
	res.render('nulis', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })
  
  router.get('/doc/yt', (req, res) => {
	  res.render('yt', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title});
  })
  
  router.get('/doc/igs', (req, res) => {
	  res.render('igs', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title});
  })
  
  router.get('/doc/fb', (req, res) => {
	  res.render('fb', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title});
  })
  
  router.get('/doc/lirik', (req, res) => {
	  res.render('lirik', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title});
  })
  
  router.get('/doc/ttscl', (req, res) => {
	  res.render('ttscl', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title});
  })
  
  router.get('/doc/filmapik', (req, res) => {
	  res.render('filmapik', {host: req.header('x-forwarded-proto')+'://'+req.headers.host, title: title})
  })

  router.get('/about', (req, res) => {
    res.render('about', {layout: false});
  })

module.exports = router
