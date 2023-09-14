// import { skills } from '../data/skills-data.js'
import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res){
  res.render('skills/new')
}

function create(req, res) {
  req.body.learned = true
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function edit(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  console.log(req.params)
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export { 
  index,
  newSkill as new,
  create,
  show,
  edit,
  deleteSkill as delete, 
}