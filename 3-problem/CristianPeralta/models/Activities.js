const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitiesSchema = new Schema(
  {
    member: {
        type: String,
        required: true,
    },
    location: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
    },
    activity: {
        type: String,
        required: true,
    },
    description: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Activities', activitiesSchema);
