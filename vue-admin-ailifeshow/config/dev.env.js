'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https:localhost:8001/eduservice/teacher"',
  BASE_API: '"http://localhost:7001"',
})
