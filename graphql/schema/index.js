const axios = require('axios')
const {GraphQLObjectType, GraphQLString,
    GraphQLList, GraphQLSchema, 
    GraphQLBoolean, GraphQLInt,
    GraphQLFloat, GraphQLDirective, 
    GraphQLNonNull, GraphQLEnumType,
    GraphQLID} = require('graphql')
;

const ProductType = require('./ProductType')
const CategoryType = require('./CategoryType')
const MainType = require('./MainType')
const CustomerType = require('./CustomerType')

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        products: {
            type: new GraphQLList(ProductType),
            args: {
                limit: { type: GraphQLInt },
                offset: { type: GraphQLInt },
                id: { type: GraphQLString },
                category: { type: GraphQLString },
                sub: { type: GraphQLString },
                type: { type: GraphQLString },
                company: { type: GraphQLString },
                minprice: { type: GraphQLInt },
                maxprice: { type: GraphQLInt },
                rating: { type: GraphQLID },
            },
            resolve(parent, args){
                let { limit, offset, id, category, sub, type, company, minprice, maxprice, rating } = args

                let url = `http://127.0.0.1:5000/products?
                ${limit ? 'limit=' + limit : 'limit=20'}
                ${offset ? '&offset=' + offset : '&offset=0'}
                ${category ? '&category=' + category : ''}
                ${sub ? '&sub=' + sub : ''}
                ${type ? '&type=' + type : ''}
                ${company ? '&company=' + company : ''}
                ${id ? '&id=' + id : ''}
                ${minprice ? '&minprice=' + minprice : ''}
                ${maxprice ? '&maxprice=' + maxprice : ''}
                ${rating ? '&rating=' + rating : ''}
                `.replace(/\s/g, '')

                return axios.get(url).then(res => res.data.data.products)
            }
        },
        
        product: {
            type: ProductType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args){
                let { id } = args
                let url = `http://127.0.0.1:5000/products?id=${id}`

                return axios.get(url).then(res => res.data.data.products[0])
            }
        },

        categories:{
            type: new GraphQLList(CategoryType),
            resolve(parent, args){
                let { id, category } = args
                let url = `http://127.0.0.1:5000/categories`

                return axios.get(url).then(res => res.data.data)
            }
        },

        category:{
            type: CategoryType,
            args: {
                id: { type: GraphQLString },
                category: { type: GraphQLString }
            },
            resolve(parent, args){
                let { id, category } = args
                let url = `http://127.0.0.1:5000/categories?${id ? "&id=" + id : ''}${category ? "&category=" + category : ''}`

                return axios.get(url).then(res => res.data.data[0])
            }
        },

        main: {
            type: MainType,
            resolve(parent, args){
                let url = "http://127.0.0.1:5000/"

                return axios.get(url).then(res => res.data.data)
            }
        },

        customer: {
            type: CustomerType,
            args: {
                secret: { type: new GraphQLNonNull(GraphQLString) },
                token: { type: new GraphQLNonNull(GraphQLString) },
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args){
                let { id, secret, token } = args
                let url = `http://127.0.0.1:5000/customer?id=${id}&secret=${secret}&token=${token}`

                return axios.get(url).then(res => res.data.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery
})