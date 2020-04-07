const {Router} = require('express')
const {createComment} = require('../controllers/comment.controller')
const router = Router()

// /api/comment
router.post('/api/comment', createComment)

module.exports = router
