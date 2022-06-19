const User = require('./models/Users');

const resolvers = {
    Query: {
        async allUsers() {
            return await User.find();
        }
    },
    Mutation: {
        async createUser(_, {input}) {
            return await User.create(input);
        }
    }
}

module.exports = resolvers;