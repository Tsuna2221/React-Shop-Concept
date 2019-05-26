const {GraphQLObjectType, GraphQLString,
    GraphQLBoolean} = require('graphql')
;

const CustomerType = new GraphQLObjectType({
    name: 'customer',
    fields: () => ({
        created_at: { type: GraphQLString },
        email: { type: GraphQLString },
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        is_admin: { type: GraphQLBoolean },
    })
})

module.exports = CustomerType