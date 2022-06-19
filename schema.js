const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('./resolvers');

const typeDefs = `
    type User {
        _id: ID!
        name: String!
        age: Int!
        gender: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema;