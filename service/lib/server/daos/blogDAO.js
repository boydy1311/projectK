"use strict";

/* Written by @Kieran Boyd */

// A method which will return a specific blog post
var getOneBlog = function getOneBlog(blogModel, query) {
  return new Promise(function (resolve, reject) {
    blogModel.findOne(query, function (err, blog) {
      if (err) {
        reject(err);
      }
      resolve(blog);
    });
  });
};

// A method which will return blog posts that match a criteria
var getManyBlogs = function getManyBlogs(blogModel) {
  return new Promise(function (resolve, reject) {
    blogModel.findAll(function (err, blogs) {
      if (err) {
        reject(err);
      }
      resolve(blogs);
    });
  });
};

// A method which will insert a blog post into MongoDb
var insertBlog = function insertBlog(blogModel, body) {
  return new Promise(function (resolve, reject) {
    blogModel.create(body, function (err, newBlog) {
      if (err) {
        reject(err);
      }
      resolve(newBlog);
    });
  });
};

// A method which will delete a blog post from MongoDb
var deleteBlog = function deleteBlog(blogModel, req) {
  return new Promise(function (resolve, reject) {
    //TODO
  });
};

// A method which will alter a blog post in MongoDb
var updateBlog = function updateBlog(blogModel, req) {
  return new Promise(function (resolve, reject) {
    //TODO
  });
};

module.exports = {
  getOneBlog: getOneBlog,
  getManyBlogs: getManyBlogs,
  insertBlog: insertBlog,
  deleteBlog: deleteBlog,
  updateBlog: updateBlog
};
//# sourceMappingURL=blogDAO.js.map