import { Router } from 'express'
import { skills } from '../data/skills.js'
// import { app } from '../server'

const router = Router()

router.get('/', (req, res) => {
  res.render('skills/index.ejs', {
    skills: skills
  })
})

export { router }

// GET localhost:3000/skills
// router.get('/', (req, res) => {
//   res.render('skills', { title: 'Developer Skills'})
// })