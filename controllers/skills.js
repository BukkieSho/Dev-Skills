import * as skillsDb from "../data/skills-db.js"


function index(req, res) {
    skillsDb.find({}, function(error,skills) {
        res.render("skills/index", {
            skills,
            error,
            title: "Skillset",
            time: req.time
        })
    })
}

function show(req, res) {
    skillsDb.findById(req.params.id, function(error, skill) {
        res.render('/skills/show', {
            skill,
            error,
            title: "Skill Details"
        })
    })
}

function newSkill(req, res) {
    res.render('/skills/new', {
        title: "New Skill"
    })
}

function create (req, res) {
    req.body.unit = !!req.body.unit
    skillsDb.create(req.body, function(error, skill) {
        res.redirect('/skills')
    })
}


export {
    newSkill as new,
    create,
    index,
    show,
}