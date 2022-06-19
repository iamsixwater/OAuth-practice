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
        getUser(_id: ID): User
    }

    input UserInput {
        name: String!
        age: Int!
        gender: String!
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(_id: ID!, input: UserInput): User
        deleteUser(_id: ID!): Boolean!
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema;