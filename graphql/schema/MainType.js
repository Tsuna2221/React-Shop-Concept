const {GraphQLObjectType, GraphQLString,
    GraphQLList, GraphQLSchema, 
    GraphQLBoolean, GraphQLInt,
    GraphQLFloat, GraphQLDirective, 
    GraphQLNonNull, GraphQLEnumType,
    GraphQLID} = require('graphql')
;

const FeaturedType = new GraphQLObjectType({
    name: 'featured',
    fields: () => ({
        href: { type: GraphQLString },
        name: { type: GraphQLString },
        id: { type: GraphQLString },
    })
})

const TrendingType = new GraphQLObjectType({
    name: 'trending',
    fields: () => ({
        category: { type: new GraphQLList(CategoryType) },
        product: { type: new GraphQLList(ProductType) },
    })
})

const CategoryType = new GraphQLObjectType({
    name: 'trend_categories',
    fields: () => ({
        href: { type: GraphQLString },
        id: { type: GraphQLString },
        image: { type: GraphQLString },
        label: { type: GraphQLString },
    })
})

const ProductType = new GraphQLObjectType({
    name: 'trend_products',
    fields: () => ({
        id: { type: GraphQLString },
        image: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLInt },
        price_percentage: { type: GraphQLInt },
        rating: { type: GraphQLInt },
    })
})

const MainType = new GraphQLObjectType({
    name: 'main',
    fields: () => ({
        banners: { type: new GraphQLList(GraphQLString) },
        featured_categories: { type: new GraphQLList(FeaturedType) },
        trend: { type: TrendingType }
    })
})

module.exports = MainType