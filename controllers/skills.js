import { Skill } from '../models/skill.js'

function newSkill(req, res) {
    res.render('/skills/new')
}

function create (req, res) {
    req.body.ExpertLevel = !!req.body.ExpertLevel
    Skill.create(req.body)
    .then(() => {
        res.redirect('/skills')
    })
}

function index(req, res) {
    Skill.find({})
    .then(skills => {
        res.render('skills/index', {
            skills: skills,
            time: req.time,
        })
    })
}

function show(req, res) {
    Skill.findById(req.params.id)
    .then(taco => {
        res.render('/skills/show', {
            skills
        })
    })
}
export {
    newSkill as new,
    create,
    index,
    show
}