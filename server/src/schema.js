const  {gql} = require('apollo-server');

const typeDefs = gql`
    "Query to get track array for the homepage grid"
    type Query{
        getPeople:[Person]
        searchByPage(pageNum:Int):[Person]
        personById(id:Int):Person
        searchByName(name:String):[Person]
    }

    type World{
        name: String
        diameter: String
        population: String
        climate: String
    }

    "an individual person or character within the Star Wars universe"
    type Person{
        "The name of this person"
        name: String
        """
        The birth year of the person, using the in-universe standard of BBY or ABY -
        Before the Battle of Yavin or After the Battle of Yavin. 
        The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
        """
        birth_year:String
        "The height of the person in centimeters."
        height: String
        "The mass of the person in kilograms."
        mass: String
        "The gender of this person. Either 'Male', 'Female' or 'unknown', 'n/a' if the person does not have a gender."
        gender: String
        "The URL of a planet resource, a planet that this person was born on or inhabits."
        homeworld: String
        "home of the person"
        world: World
        url: String
    },

`;

module.exports = typeDefs;
