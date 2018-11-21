/**
 * @file
 * 
 * @copyright 2018 {@link https://limin.github.io Min Li}
 * 
 * @license Licensed under {@link https://www.apache.org/licenses/LICENSE-2.0.html Apache License 2.0}
 * 
 */


const express=require('express')
const cors=require('cors')
const config=require('./fserver.config')

module.exports=function(){
  const app = express()
  const api=require('./api')()  
  app.use(express.static('public'))
  app.use(cors({
    origin: new RegExp(config.httpServer.origin)
  }))  
  app.use(config.httpServer.apiEndpoint, api)
  return app 
}