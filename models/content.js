const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema(
  {
    name: String,
    method: {
      type: String,
      enum: ['book', 'video', 'article', 'online course'],
    },
    link: String,
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
    isCompleted: { type: Boolean, default: false },
    isUrgent: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Content', contentSchema);
