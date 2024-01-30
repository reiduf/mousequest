const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const acceptedQuestSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quest: {
    type: Schema.Types.ObjectId,
    ref: 'Quest',
    required: true,
  },
  taskProgress: [Boolean]
}, {
  timestamps: true,
});

acceptedQuestSchema.virtual('isComplete').get(function() {
  return this.taskProgress.every(task => task);
});

module.exports = mongoose.model('AcceptedQuest', acceptedQuestSchema)