const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema(
  {
    name: String,
    contents: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Content',
      },
    ],
    attention: { type: Number, default: 0 },
    streak: Number,
    goal: String,
    goalDate: Date,
    isPublic: { type: Boolean, default: true },
    isOpen: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Topic', topicSchema);
