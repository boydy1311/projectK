import { getOneBlog, getManyBlogs, insertBlog, deleteBlog, updateBlog } from '../daos/blogDAO.js';
import { disableCertainMethods } from '../../utils/loopbackUtils.js';

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
  console.log(`title: ${title}`);
  getOneBlog(Blog, searchQuery)
  .then((blog) => {
    cb(null, blog);
  })
  .catch((getBlogErr) => {
    cb(getBlogErr);
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
  console.log('werp');
  getManyBlogs(Blog)
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
  insertBlog(Blog, body)
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
  deleteBlog(Blog, searchQuery)
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
  updateBlog(Blog, searchQuery, body)
  .then((updatedBlog) => {
    cb(null, updatedBlog);
  })
  .catch((updateErr) => {
    cb(updateErr);
  })
}

}
