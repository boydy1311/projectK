import BlogDAO from '../daos/blogDAO.js';
import { disableCertainMethods } from '../utils/loopbackUtils.js';
import { errorHandler } from '../utils/errorHandling.js';

// const blogDAO = new BlogDAO();

module.exports = (Blog) => {
disableCertainMethods(Blog);

  Blog.remoteMethod('getBlogByTitle', {
    http: { verb: 'get', path: '/:title' },
    accepts: [
      { arg: 'title', type: 'String', required: true },
      { arg: 'req', type: 'Object', http: { source: 'req' } },
      { arg: 'options', type: 'Object', http: 'optionsFromRequest' },
    ],
    returns: { arg: 'items', type: 'blog', root: true },
  });

Blog.getBlogByTitle = (title, req, options, cb) => {
  const searchQuery = {
    where: {
      title: title
    }
  };
  BlogDAO.getOneBlog(Blog, searchQuery)
  .then((blog) => {
    // If the blog was not found
    if (!blog) {
      const notFoundErr = errorHandler('Blog does not exist', 404);
      cb(notFoundErr);
      return;
    }
    // return the found blog
    cb(null, blog);
  })
  .catch((getBlogErr) => {
    console.log(`Error in getting blog: ${getBlogErr}`);
    const serverErr = errorHandler('Internal Server Error', 500);
    cb(serverErr);
  });
}

Blog.remoteMethod('getBlogById', {
  http: { verb: 'get', path: '/id/:id' },
  accepts: [
    { arg: 'id', type: 'String', required: true },
    { arg: 'req', type: 'Object', http: { source: 'req' } },
    { arg: 'options', type: 'Object', http: 'optionsFromRequest' },
  ],
  returns: { arg: 'items', type: 'blog', root: true },
});

Blog.getBlogById = (id, req, options, cb) => {
const searchQuery = {
  where: {
    _id: id
  }
};
console.log(`id: ${id}`);
BlogDAO.getOneBlog(Blog, searchQuery)
.then((blog) => {
  cb(null, blog);
})
.catch((getBlogErr) => {
  cb(getBlogErr);
});
}

Blog.remoteMethod('getAllBlogs', {
  http: { verb: 'get', path: '/' },
  accepts: [
    { arg: 'req', type: 'Object', http: { source: 'req' } },
    { arg: 'options', type: 'Object', http: 'optionsFromRequest' },
  ],
  returns: { arg: 'items', type: 'blog', root: true },
});

Blog.getAllBlogs = (req, options, cb) => {
  BlogDAO.getManyBlogs(Blog)
  .then((blogs) => {
    cb(null, blogs);
  })
  .catch((getBlogsErr) => {
    cb(getBlogsErr);
  });
}

Blog.remoteMethod('postBlog', {
  http: { verb: 'post', path: '/' },
  accepts: [
    { arg: 'req', type: 'Object', http: { source: 'req' } },
    { arg: 'body', type: 'Object', http: { source: 'body' } },
    { arg: 'options', type: 'Object', http: 'optionsFromRequest' },
  ],
  returns: { arg: 'items', type: 'blog', root: true },
});

Blog.postBlog = (req, body, options, cb) => {
  BlogDAO.insertBlog(Blog, body)
  .then((newBlog) => {
    cb(null, newBlog);
  })
  .catch((insertErr) => {
    cb(insertErr);
  })
}

Blog.remoteMethod('deleteBlog', {
  http: { verb: 'delete', path: '/:title' },
  accepts: [
    { arg: 'req', type: 'Object', http: { source: 'req' } },
    { arg: 'options', type: 'Object', http: 'optionsFromRequest' },
  ],
  returns: { arg: 'items', type: 'blog', root: true },
});

Blog.deleteBlog = (req, options, cb) => {
  const searchQuery = {
    where: {
      title: title
    }
  };
  BlogDAO.deleteBlog(Blog, searchQuery)
  .then((deletedBlog) => {
    cb(null, deletedBlog);
  })
  .catch((deleteErr) => {
    cb(deleteErr);
  })
}

Blog.remoteMethod('updateBlog', {
  http: { verb: 'put', path: '/:title' },
  accepts: [
    { arg: 'req', type: 'Object', http: { source: 'req' } },
    { arg: 'body', type: 'Object', http: { source: 'body' } },
    { arg: 'options', type: 'Object', http: 'optionsFromRequest' },
  ],
  returns: { arg: 'items', type: 'blog', root: true },
});

Blog.updateBlog = (req, body, options, cb) => {
  const searchQuery = {
    where: {
      title: title
    }
  };
  BlogDAO.updateBlog(Blog, searchQuery, body)
  .then((updatedBlog) => {
    cb(null, updatedBlog);
  })
  .catch((updateErr) => {
    cb(updateErr);
  })
}

}
