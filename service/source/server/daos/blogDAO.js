/* Written by @Kieran Boyd */

// A method which will return a specific blog post

export default class BlogDAO {
  static getOneBlog(blogModel, query){
    return new Promise((resolve, reject) => {
      console.log(query);
      blogModel.findOne(query, (err, blog) => {
        if (err) {
          reject(err);
        }
        resolve(blog);
      });
    });
  }

  // A method which will return blog posts that match a criteria
  static getManyBlogs(blogModel) {
    return new Promise((resolve, reject) => {
    blogModel.find((err, blogs) => {
      if (err) {
        reject(err);
      }
      resolve(blogs);
    })
  });
}

  // A method which will insert a blog post into MongoDb
  static insertBlog(blogModel, body){
    return new Promise((resolve, reject) => {
    blogModel.create(body, (err, newBlog) => {
      if (err) {
        reject(err);
      }
      resolve(newBlog);
    })
  });
}

  // A method which will delete a blog post from MongoDb
  static deleteBlog(blogModel, searchQuery){
    return new Promise((resolve, reject) => {
    blogModel.destroyAll(searchQuery, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
}

  // A method which will alter a blog post in MongoDb
  static updateBlog(blogModel, searchQuery, newBody){
    return new Promise((resolve, reject) => {
    getOneBlog(blogModel, searchQuery)
    .then((blog) => {
      blog.updateAttributes(newBody, (updateErr, updatedBlog) => {
        if (updateErr) {
          reject(eupdateErrrr);
        }
        resolve(updatedBlog);
      });
    })
      .catch((getErr) => {
        reject(getErr);
      });
    });
  }
}
