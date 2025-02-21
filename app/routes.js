import express from 'express'

import { getJourney } from './journeys.js'

const router = express.Router()

router.all(['/:version/:view?', '/:version/:view/:view?'], (req, res, next) => {
  res.locals.paths = getJourney(req, req.params.version)
  next()
})

router.post(['/:version/:view?', '/:version/:view/:view?'], (req, res) => {
  res.redirect(res.locals.paths.next)
})

// --------------------------------------------------------
// generic routes
// --------------------------------------------------------

// if edge page requested anywhere in this app render the edge.html page
router.get(/(^|\/)_edge(\/|$)/, (req, res) => {
  res.render('edge.html')
})

// Keep the following line to return your routes to the app
export default router
