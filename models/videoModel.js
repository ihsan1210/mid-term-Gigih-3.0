const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoId : {
      type:String,
      required:true
    },
    urlThumbnail : {
      type:String,
      required:true
    },
    urlVideo : {
      type:String,
      required:true
    },
    product :[{
      productId :{
      type:String,
      required:true
      },
      productThumbnail :{
        type:String,
        required:true
        },
      productName :{
        type:String,
        required:true
      },
      linkProduct :{
        type:String,
        required:true
      },
      price :{
        type:Number,
        required:true
      }
  }]
})
const video = mongoose.model("video", videoSchema);

module.exports = video;
