import { Router } from 'express'

const router = Router()

// GET localhost:3000/skills
router.get('/', (req, res) => {
  res.render('skills', { title: 'Developer Skills'})
})


export { router }