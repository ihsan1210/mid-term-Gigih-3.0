const express = require('express');
const router = express.Router();
const CommentModel = require('../models/commentModel');

router.get('/list', async (req,res)=>{
  try{
    const comment = await CommentModel.find();
    res.status(200).json(comment);
  } catch(error){
    res.status(500).json({ message: error.message });
  }
})

router.post('/post', (req,res)=>{
  const comment = new CommentModel({
    videoId: req.body.videoId,
    username: req.body.username,
    comment: req.body.comment,
  });
  try{
    const saveComment = comment.save();
    res.status(200).json({
      message:'comment added',
      data : {
        username: saveComment.username,
        comment : saveComment.comment
      }
    })
  }catch(error){
    res.status(500).json({message:error.message})
  }
})

module.exports = router;
