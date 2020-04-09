const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/post.controller')
const router = Router()

// Admin
// /api/post/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  ctr.createPost
)

router.get(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.getById
)

router.get(
  '/admin/get/analytics',
  passport.authenticate('jwt', {session: false}),
  ctr.getAnalytics
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.updatePost
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.removePost
)

// Base
// /api/post
router.get('/', ctr.getAll)
router.get('/:id', ctr.getById)
router.put('/add/view/:id', ctr.addView)

module.exports = router
