const app = require('express')()
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(4000, console.log('Running at port 4000'));