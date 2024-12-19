const mongoose = require('mongoose')


const blogPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 50,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      default: 'General',
      trim: true,
    },
    likes: {
      type: [String],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
    },
    comments: [commentSchema],
  });


  const commentSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    commentedAt: {
      type: Date,
      default: Date.now,
    },
  });

module.exports = mongoose.model('BlogPost', blogPostSchema);

