const { GraphQLServer } = require("graphql-yoga");

// 1
//GraphQL schema
const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}
type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

//dummy data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  },
  {
    id: "link-1",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));


//querry example
// query {
//     info
//     feed {
//       id
//       url
//       description
//     }
//   }