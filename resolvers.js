const User = require('./models/Users');

const resolvers = {
    Query: {
        async allUsers() {
            return await User.find();
        }
    }
}

module.exports = resolvers;