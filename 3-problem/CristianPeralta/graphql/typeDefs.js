const { gql } = require("apollo-server");
module.exports = gql`
  enum Member {
    Monkey
    Zoro
    Sanj
    Usop
    Nam
    Nico_Robi
    Choppe
    Franky
  }

  type Location {
    latitude: Float
    longitude: Float
  }

  input LocationInput {
    latitude: Float
    longitude: Float
  }

  type Activity {
    id: ID!
    member: Member!
    activity: String!
    location: Location
    description: String
    imageUrl: String
  }

  input ActivityInput {
    member: String
    activity: String
    location: LocationInput
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