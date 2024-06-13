const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitiesSchema = new Schema(
  {
    member: {
        type: String,
        required: true,
        enum: [
          "Monkey",
          "Zoro",
          "Sanj",
          "Usop",
          "Nam",
          "Nico Robi",
          "Choppe",
          "Franky",
        ]
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
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
