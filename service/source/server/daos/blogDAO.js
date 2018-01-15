/* Written by @Kieran Boyd */

// A method which will return a specific blog post
const getOneBlog = (blogModel, query) => new Promise((resolve, reject) => {
  blogModel.findOne(query, (err, blog) => {
    if (err) {
      reject(err);
    }
    resolve(blog);
  });
});

// A method which will return blog posts that match a criteria
const getManyBlogs = (blogModel) => new Promise((resolve, reject) => {
  blogModel.findAll((err, blogs) => {
    if (err) {
      reject(err);
    }
    resolve(blogs);
  })
});

// A method which will insert a blog post into MongoDb
const insertBlog = (blogModel, body) => new Promise((resolve, reject) => {
  blogModel.create(body, (err, newBlog) => {
    if (err) {
      reject(err);
    }
    resolve(newBlog);
  })
});

// A method which will delete a blog post from MongoDb
const deleteBlog = (blogModel, req) => new Promise((resolve, reject) => {
  //TODO
});

// A method which will alter a blog post in MongoDb
const updateBlog = (blogModel, req) => new Promise((resolve, reject) => {
  //TODO
});

module.exports = {
  getOneBlog,
  getManyBlogs,
  insertBlog,
  deleteBlog,
  updateBlog,
}
