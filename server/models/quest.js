const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  description: {type: String, required: true},
  hint: {type: String, required: false},
}, {
  timestamps: true,
});

const questSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: { type: String, required: true },
  description: { type: String, required: true},
  tags: {
    kids: { type: Boolean, default: false },
    adults: { type: Boolean, default: false },
    families: { type: Boolean, default: false },
    ca: { type: Boolean, default: false },
    disneyland: { type: Boolean, default: false },
    short: { type: Boolean, default: false },
    easy: { type: Boolean, default: false },
    hard: { type: Boolean, default: false },
    mickeys: { type: Boolean, default: false },
    queue: { type: Boolean, default: false },
    riddles: { type: Boolean, default: false },
  },
  tasks: [taskSchema],
  likes: { 
    type: Number, 
    required: false, 
    default: 0
  }, 
  accepted: {
    type: Number,
    required: false,
    default: 0,
  },
  tagSearch: {
    type: String,
    default: function () {
      return Object.keys(this.tags).filter(tag => this.tags[tag]).join(" ")
    }
  },
}, {
  timestamps: true,
});

questSchema.index({title: 'text', description: 'text', tagSearch: 'text'})

module.exports = mongoose.model('Quest', questSchema);