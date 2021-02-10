const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,
            ref: 'User'
        },
        description: {
            type: String,
            required: true
        }
    }
)

const Event = mongoose.model('Event', eventSchema)

module.exports = Event