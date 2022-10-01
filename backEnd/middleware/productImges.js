const multer = require("multer")
const path = require("path")
const fs =require("fs")
const storage = multer.diskStorage({
destination:function(req,file,cb){
const myLoc = "public/images"
cb(null,myLoc)
},
filename:function(req,file,cb){
    const myName = file.fieldname + "-"+Date.now()+path.extname(file.originalname)
    cb(null,myName)
}
})

const upload  = multer({
    storage,
    limits:{fieldSize:200000000},
    fileFilter: function(req,file,cb){
        if(path.extname(file.originalname) != ".jpg")
        return cb(new Error ("invalid ext"),false)
        cb(null,true)
    }
})

module.exports = upload 