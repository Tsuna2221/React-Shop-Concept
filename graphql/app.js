const app = require('./node_modules/express')()
const graphqlHTTP = require('./node_modules/express-graphql')
const schema = require('./schema')
const cors = require('cors')

app.use(cors())

app.use('/gql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(4000, console.log('Running at port 4000'));

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidHN1bmEyMjIxQGxpdmUuY29tIiwiaWQiOiIwYzR4MUVlUUJOIiwiZXhwIjoxNTU4OTI5MjUwfQ.qz4n7_Uf4nXCt7EyLXTfvSJMhqXYZjBUlQN4I6nSsH0
//HXyecS4YWXz08xG