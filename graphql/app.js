const app = require('express')()
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(4000, console.log('Running at port 4000'));

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidHN1bmEyMjIxQGxpdmUuY29tIiwiaWQiOiIwYzR4MUVlUUJOIiwiZXhwIjoxNTU4OTI5MjUwfQ.qz4n7_Uf4nXCt7EyLXTfvSJMhqXYZjBUlQN4I6nSsH0
//HXyecS4YWXz08xG