'use strict';

var _blogDAO = require('../daos/blogDAO.js');

module.exports = function (Blog) {

  Blog.remoteMethod('getBlog', {
    http: { verb: 'get', path: '/:title' },
    accepts: [{ arg: 'req', type: 'Object', http: { source: 'req' } }, { arg: 'title', type: 'String' }, { arg: 'options', type: 'Object', http: 'optionsFromRequest' }],
    returns: { arg: 'items', type: 'blog', root: true }
  });

  Blog.getBlog = function (req, title, options, cb) {
    var searchQuery = {
      where: {
        title: title
      }
    };
    (0, _blogDAO.getOneBlog)(Blog, searchQuery).then(function (blog) {
      cb(null, blog);
    }).catch(function (getBlogErr) {
      cb(getBlogErr);
    });
  };

  Blog.remoteMethod('getAllBlogs', {
    http: { verb: 'get', path: '/' },
    accepts: [{ arg: 'req', type: 'Object', http: { source: 'req' } }, { arg: 'options', type: 'Object', http: 'optionsFromRequest' }],
    returns: { arg: 'items', type: 'blog', root: true }
  });

  Blog.getAllBlogs = function (req, options, cb) {
    (0, _blogDAO.getManyBlogs)(Blog).then(function (blogs) {
      cb(null, blogs);
    }).catch(function (getBlogsErr) {
      cb(getBlogsErr);
    });
  };

  Blog.remoteMethod('postBlog', {
    http: { verb: 'post', path: '/blogs' },
    accepts: [{ arg: 'req', type: 'Object', http: { source: 'req' } }, { arg: 'body', type: 'Object', http: { source: 'body' } }, { arg: 'options', type: 'Object', http: 'optionsFromRequest' }],
    returns: { arg: 'items', type: 'blog', root: true }
  });

  Blog.postBlog = function (req, body, options, cb) {
    (0, _blogDAO.insertBlog)(Blog, body).then(function (newBlog) {
      cb(null, newBlog);
    }).catch(function (insertErr) {
      cb(insertErr);
    });
  };
};
//# sourceMappingURL=blog.js.map