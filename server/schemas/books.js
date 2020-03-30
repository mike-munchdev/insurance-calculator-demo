const {gql} = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;
    
