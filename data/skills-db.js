const skills = [
    {text: 'JavaScript', unit: 1, _id: 12456},
    {text: 'HTML', unit: 2, _id: 13608},
    {text: 'Mongoose', unit: 2, _id: 12904},
]

const find = (conditions, callback) => {
// see if this works, if not, execute the code in the catch block
try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
    throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
    // deal with errors
} catch (error) {
    console.log(error)
    callback(error, [])
}
}

const findById = (id, callback) => {
    try {
        const skill = skills.find(skill => skills._id === parseInt(id))
        if (!skills) throw new Error ('No skill was found')
        return callback(null, skill)
    } catch (error) {
    console.log(error)
    return callback(error, null)
    }
}

function create(skill, callback) {
    skills._id = Date.now() % 1000000
    skills.push(skills)
    return callback(null, skills)
}

function findByIdAndDelete(id, callback) {
try { 
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
} catch(error) {
    return callback(error, null)  
    }
}

export { 
    find,
findById,
create,
findByIdAndDelete
}