const Activity = require("../models/Activities");

module.exports = {
  Query: {
    async activity(_, { ID }) {
      return await Activity.findById(ID);
    },
    async getActivities(_, { amount }) {
      return await Activity.find().limit(amount);
    },
  },
  Mutation: {
    async createActivity(_, { activityInput: { member, location, activity, description, imageUrl } }) {
      try {
        const createdActivity = new Activity({
          member,
          location,
          activity,
          description,
          imageUrl,
        });
        const response = await createdActivity.save();
        return {
          id: response.id,
          ...response._doc,
        };
      } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
          throw new Error(`Validation Error: ${error.message}`);
        }
        throw new Error('Internal Server Error');
      }
    },
    async deleteActivity(_, { ID }) {
      const wasDeleted = (await Activity.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    },
    async editActivity(_, { ID, activityInput: { activity, member, description, imageUrl } }) {
      const wasEdited = (
        await Activity.updateOne(
          { _id: ID },
          {
            member,
            activity,
            description,
            imageUrl,
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};