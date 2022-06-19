const User = require('./models/Users');

const resolvers = {
    Query: {
        async allUsers() {
            return await User.find();
        },
        async getUser(_, {_id}) {
            return await User.findById(_id);
        },
    },
    Mutation: {
        async createUser(_, {input}) {
            return await User.create(input);
        },
    }
}

module.exports = resolvers;