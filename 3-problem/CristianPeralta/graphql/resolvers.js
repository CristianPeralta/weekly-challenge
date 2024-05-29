// This gives us access to the activity model you created in the Activities.js
const Activity = require("../models/Activities");

module.exports = {
  Query: {
    // This holds all our queries to the apollo-server
    async activity(_, { ID }) {
      return await Activity.findById(ID);
    },
    async getActivities(_, { amount }) {
      return await Activity.find().limit(amount);
    },
  },
  Mutation: {
    // This holds all our mutation
    async createActivity(_, { activityInput: { member, activity, description, imageUrl } }) {
      try {
        // This code is setting up the module.
        const createdActivity = new Activity({
          member,
          activity,
          description,
          imageUrl,
        });
        const response = await createdActivity.save(); // This is saying save the cretedActivity schema or module to our MongoDB
        // need to return a activity to our apollo-server resolver
        return {
          id: response.id,
          ...response._doc, //take all of the different properties of the result and show all the various properties that are going to show what our recipe is all about
        };
      } catch (error) {
        console.log(error);
      }
    },
    async deleteActivity(_, { ID }) {
      const wasDeleted = (await Activity.deleteOne({ _id: ID })).deletedCount; // use a mongoose function called deleteOne
      return wasDeleted; // the deletedCount returns 1 if something was created and 0 if nothing was created
    },
    async editActivity(_, { ID, activityInput: { name, member, description, imageUrl } }) {
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
      ).modifiedCount; // returns an object similarly to the wasDeleted
      return wasEdited; // returns 0 if an ID can't be found
    },
  },
};