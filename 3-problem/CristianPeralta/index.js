require('dotenv-safe').config();
const db = require('./db');

const express = require('express');
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

db.connect().then(() => {
    return server.listen({ port });
}).then((res) => console.log(`Server listening at ${res.url}`));
