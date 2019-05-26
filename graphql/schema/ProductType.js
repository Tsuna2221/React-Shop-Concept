const {GraphQLObjectType, GraphQLString,
    GraphQLList, GraphQLInt,
    GraphQLID} = require('graphql')
;

const AboutType = new GraphQLObjectType({
    name: 'about',
    fields: () => ({
        description: { type: GraphQLString },
        rating: { type: GraphQLInt },
        release_date: { type: GraphQLString }
    })
})

const CategoryType = new GraphQLObjectType({
    name: 'category',
    fields: () => ({
        category_name: { type: GraphQLString },
        sub_category: { type: SubType },
    })
})

const SubType = new GraphQLObjectType({
    name: 'sub_category',
    fields: () => ({
        name: { type: GraphQLString },
        type: { type: GraphQLString },
    })
})

const ProductType = new GraphQLObjectType({
    name: 'products',
    fields: () => ({
        title: { type: GraphQLString },
        quantity: { type: GraphQLInt },
        price: { type: GraphQLInt },
        price_percentage: { type: GraphQLInt },
        pid: { type: GraphQLID },
        num_of_shares: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        company: { type: GraphQLString },
        images : { type: new GraphQLList(GraphQLString) },
        about: { type: AboutType },
        category: { type: CategoryType }
    })
})

module.exports = ProductType