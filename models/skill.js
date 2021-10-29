import mongoose from 'mongoose'
const Schema = mongoose.Schema


const skillsSchema = new Schema({
    name: String,
    expert: Boolean
}, {
timestamps: true
})

const Skill = mongoose.model('Skill', skillsSchema)

export {
    Skill
}