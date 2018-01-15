import { getOneBlog, getManyBlogs, insertBlog } from '../daos/blogDAO.js';

module.exports = (Blog) => {

  Blog.remoteMethod('getBlog', {
    http: { verb: 'get', path: '/:title' },
    accepts: [
      { arg: 'req', type: 'Object', http: { source: 'req' } },
      { arg: 'title', type: 'String' },
      { arg: 'options', type: 'Object', http: 'optionsFromRequest' },
    ],
    returns: { arg: 'items', type: 'blog', root: true },
  });

Blog.getBlog = (req, title, options, cb) => {
  const searchQuery = {
    where: {
      title: title
    }
  };
  getOneBlog(Blog, searchQuery)
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
  getManyBlogs(Blog)
  .then((blogs) => {
    cb(null, blogs);
  })
  .catch((getBlogsErr) => {
    cb(getBlogsErr);
  });
}

Blog.remoteMethod('postBlog', {
  http: { verb: 'post', path: '/blogs' },
  accepts: [
    { arg: 'req', type: 'Object', http: { source: 'req' } },
    { arg: 'body', type: 'Object', http: { source: 'body' } },
    { arg: 'options', type: 'Object', http: 'optionsFromRequest' },
  ],
  returns: { arg: 'items', type: 'blog', root: true },
});

Blog.postBlog = (req, body, options, cb) => {
  insertBlog(Blog, body)
  .then((newBlog) => {
    cb(null, newBlog);
  })
  .catch((insertErr) => {
    cb(insertErr);
  })
}

}
