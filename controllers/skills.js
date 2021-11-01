import * as skillsDb from "../data/skills-db.js"

function newSkill(req, res) {
    res.render('/skills/new', {
        title: "New Skill"
    })
}

function create (req, res) {
    req.body.ExpertLevel = !!req.body.ExpertLevel
    skillsDb.create(req.body, function(error, skill) {
        res.redirect('/skills')
    })
}

function index(req, res) {
    skillsDb.find({}, function(error,skills) {
        res.render('skills/index', {
            skills,
            error,
            time: req.time,
            title: "Skillset"
        })
    })
}

function show(req, res) {
    skillsDb.findById(req.params.id, function(error, skill) {
        res.render('/skills/show', {
            skills,
            error,
            title: "Skill Details"
        })
    })
}
export {
    newSkill as new,
    create,
    index,
    show
}