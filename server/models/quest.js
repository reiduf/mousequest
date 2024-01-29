const mongoose = rquire('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  description: {type: String, required: true},
  hint: {type: String, required: false},
  completed: {
    type: Boolean, 
    required: false, 
    default: false
  },
}, {
  timestamps: true,
});

const questSchema = new Schema({
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
})