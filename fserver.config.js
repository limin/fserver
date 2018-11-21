module.exports = {
  httpServer:{
    port: 3000,
    origin: "http(s)?:\/\/[localhost||limin.herokuapp.com||limin.github.io](:[\d]+)?",
    //restful api end point
    apiEndpoint:"/api/file",
  },

  multer:{
    dest:"D:/tmp",
    limits:{fileSize:"50MB"}
  },

  logger:{
    path:".",
    level:"info"
  } 
}  
