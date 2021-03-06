'use strict'

const MONGODB = {
  uri: 'mongodb://127.0.0.1:27017/blog_test',
  prouri: 'mongodb://xxx:xxx@127.0.0.1:27111/blog'
}

const USERMSG = {
  adminUsername: 'xxx',
  adminPassword: 'xxx',
  secretOrPrivateKey: 'xxx'
}

const APP = {
  ROOT_PATH: '/api',
  LIMIT: 10,
  PORT: 3008
}

export default {
  MONGODB,
  USERMSG,
  APP
}
