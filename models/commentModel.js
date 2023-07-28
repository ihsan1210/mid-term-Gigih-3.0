const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  videoId : {
    type:String,
    required:true
  },
  username : {
    type:String,
    required:true
  },
  comment : {
    type:String,
    required:true
  }
})
    

const comment = mongoose.model("comment",commentSchema)

module.exports = comment;