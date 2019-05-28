const axios = require("axios")
const exp = require('./ProductType')

const {GraphQLObjectType, GraphQLString,
       GraphQLList, GraphQLNonNull, GraphQLInt,
       GraphQLID} = require('graphql')
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
        sub_categories: { type: new GraphQLList(SubType) },
        products: { 
            type: exp.product,
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
                let { limit, offset, id, sub, type, company, minprice, maxprice, rating } = args

                let url = `http://127.0.0.1:5000/products?${limit ? 'limit=' + limit : 'limit=20'}${offset ? '&offset=' + offset : '&offset=0'}${'&category=' + parent.category_name}${sub ? '&sub=' + sub : ''}${type ? '&type=' + type : ''}${company ? '&company=' + company : ''}${id ? '&id=' + id : ''}${minprice ? '&minprice=' + minprice : ''}${maxprice ? '&maxprice=' + maxprice : ''}${rating ? '&rating=' + rating : ''}`.replace(/^\s+|\s+$/g, '');

                return axios.get(url).then(res => res.data.data)
            }
        }
    })
})

module.exports = CategoryType