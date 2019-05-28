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

const DataType = new GraphQLObjectType({
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

const ProductType = new GraphQLObjectType({
    name: 'query_data',
    fields: () => ({
        list_companies: { type: new GraphQLList(GraphQLString) },
        list_subs: { type: new GraphQLList(GraphQLString) },
        list_types: { type: new GraphQLList(GraphQLString) },
        products: { type: new GraphQLList(DataType) },
        query_next: { type: GraphQLString },
        query_prev: { type: GraphQLString },
        total_length: { type: GraphQLInt },
        total_pages: { type: GraphQLInt },
        total_query: { type: GraphQLInt },
    })
})

const exp = {
    product: ProductType,
    data: DataType
}

module.exports = exp