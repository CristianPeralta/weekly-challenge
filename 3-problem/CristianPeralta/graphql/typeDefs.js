const { gql } = require("apollo-server");
module.exports = gql`
  type Activity {
    member: String
    activity: String
    description: String
    imageUrl: String
  }
  input ActivityInput {
    member: String
    activity: String
    description: String
    imageUrl: String
  }
  type Query {
    activity(ID: ID!): Activity!
    getActivities(amount: Int): [Activity]
  }
  type Mutation {
    createActivity(activityInput: ActivityInput): Activity!
    deleteActivity(ID: ID!): Boolean
    editActivity(ID: ID!, activityInput: ActivityInput): Boolean
  }
`;