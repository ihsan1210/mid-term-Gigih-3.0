const express = require('express');
const router = express.Router();
const CommentModel = require('../models/commentModel');

router.get('/list/:id', async (req,res)=>{
  try{
    const comment = await CommentModel.find({videoId:req.params.id});
    res.status(200).json(comment);
  } catch(error){
    res.status(500).json({ message: error.message });
  }
})

router.post('/post/:videoId', (req,res)=>{
  const comment = new CommentModel({
    videoId: req.params.videoId,
    username: req.body.username,
    comment: req.body.comment,
  });
  try{
    const saveComment = comment.save();
    res.status(200).json({
      message:'comment added',
      data : saveComment
    })
  }catch(error){
    res.status(500).json({message:error.message})
  }
})

module.exports = router;
