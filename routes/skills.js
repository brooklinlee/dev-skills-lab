import { Router } from 'express'

const router = Router()

// GET localhost:3000/skills
router.get('/skills', (req, res) => {
  res.render('skills', { title: 'Developer Skills'})
})

export {
  router,
}