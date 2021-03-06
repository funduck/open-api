// args.apiDoc needs to be a js object.  This file could be a json file, but we can't add
// comments in json files.
module.exports = {
  swagger: '2.0',

  // all routes will now have /v3 prefixed.
  basePath: '/v3',

  info: {
    title: 'express-openapi sample project',
    version: '3.0.0'
  },

  definitions: {
    User: {
      $ref: 'http://example.com/user'
    },
    Error: {
      $ref: 'http://example.com/error#/schema'
    }
  },

  parameters: {
    User: {
      "in": 'body',
      name: 'user',
      schema: {$ref: 'http://example.com/user'}
    },
    userId: {
      "in": 'path',
      name: 'userId',
      type: 'string',
      required: true
    }
  },

  responses: {
    Forbidden: {
      description: 'Access denied',
      schema: {$ref: 'http://example.com/error#/schema'}
    },
    Error: {
      description: 'Error',
      schema: {$ref: 'http://example.com/error#/schema'}
    }
  },

  // paths are derived from args.routes.  These are filled in by fs-routes.
  paths: {},

  // tags is optional, and is generated / sorted by the tags defined in your path
  // docs.  This API also defines 2 tags in operations: "creating" and "fooey".
  tags: [
    {name: 'fooey'},
    {name: 'users'}
  ]
};
