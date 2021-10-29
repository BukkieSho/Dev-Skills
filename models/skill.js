import mongoose from 'mongoose'
const Schema = mongoose.Schema


const skillSchema = new Schema({
    Name: String,
    TechStack: String,
    ExpertLevel: {
        enum: ['Noob', 'Getting There', 'Guru']
        }
    }, {
timestamps: true
})

const Skill = mongoose.model('Skill', skillSchema)

export {
    Skill
}