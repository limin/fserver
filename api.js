/**
 * @file
 * 
 * @copyright 2018 {@link https://limin.github.io Min Li}
 * 
 * @license Licensed under {@link https://www.apache.org/licenses/LICENSE-2.0.html Apache License 2.0}
 * 
 */

const debug = require('debug')('fserver:api')
const express = require('express')
const multer  = require('multer')
const config = require('./fserver.config')
const fs = require('fs')
const upload = multer({ dest: config.multer.dest})

module.exports=function(){
  const router = express.Router({mergeParams:true})  
  router.post('/upload', upload.single('video'), function (req, res, next) {
    // req.file is the `video` file
    // req.body will hold the text fields, if there were any
    debug("Uploaded file: %o",req.file.originalname)
    const {encoding,mimetype,size,filename}=req.file
    res.send(
      {
        encoding,
        mimetype,
        size,      
        filename      
      })
  })  

  router.get('/stream/:filename',(req,res)=>{
    fs.createReadStream(`${config.multer.dest}/${req.params.filename}`).pipe(res)    
  })
  return router
}