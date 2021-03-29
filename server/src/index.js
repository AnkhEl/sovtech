const {ApolloServer, MockList} = require('apollo-server');
const typeDefs = require('./schema');
const fetch = require('node-fetch');
const StarWarsAPI = require('../datasources/swapi');


const resolvers = {
    Query:{
        personById: async (parent,{id},{dataSources},info)=>{
            return dataSources.StarWarsAPI.getPersonById(id);
        },
        getPeople: async (parent,args,{dataSources},info)=>{
            return dataSources.StarWarsAPI.getPeople();
        },
        searchByPage:  async (parent,{pageNum},{dataSources},info)=>{
            return dataSources.StarWarsAPI.searchByPage(pageNum);
        },
        searchByName: async (parent,{name},{dataSources},info)=>{
            return dataSources.StarWarsAPI.searchByName(name);
        }, 
    },
    Person:{
        world: async (person)=>{
            const response = await fetch(person.homeworld);
            return response.json();
        }
    }

}

const dataSources = ()=>({
    StarWarsAPI: new StarWarsAPI(),
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
});

server.listen().then(()=>{
    console.log(`
        Server is running
        Listening on port 400
        Query at https://studio.apollographql.com/dev
    `);
});
