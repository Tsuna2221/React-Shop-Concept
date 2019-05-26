const {GraphQLObjectType, GraphQLString,
    GraphQLList} = require('graphql')
;

const SubType = new GraphQLObjectType({
    name: 'sub_categories',
    fields: () => ({
        name: { type: GraphQLString },
        types: { type: GraphQLList(GraphQLString) }
    })
})

const CategoryType = new GraphQLObjectType({
    name: 'categories',
    fields: () => ({
        category_name: { type: GraphQLString },
        cid: { type: GraphQLString },
        sub_categories: { type: new GraphQLList(SubType) }
    })
})

module.exports = CategoryType