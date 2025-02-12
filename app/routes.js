import express from 'express'

import { version1 } from './journeys.js'

const router = express.Router()

/**
 * Add your routes here
 */

router.all('/version-1/:view?', (req, res, next) => {
  res.locals.paths = version1(req)
  next()
})

router.post('/version-1/:view?', (req, res) => {
  res.redirect(res.locals.paths.next)
})

// Keep the following line to return your routes to the app
export default router
