const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  tasks: [
    {
      name: {
        type: String,
        trim: true,
        required: 'Enter a task name'
      },
      duration: {
        type: Number,
        required: 'Enter a task duration'
      }
    }
  ]
})

module.exports = model('Workout', Workout)
© 2021 GitHub, Inc.