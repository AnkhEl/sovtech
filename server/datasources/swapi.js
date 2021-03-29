const {RESTDataSource} = require('apollo-datasource-rest');

class StarWarsAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = 'https://swapi.dev/api';
    }

    async getPersonById(id){
        const response = await this.get(`people/${id}`);
        return response;
    }

    async getPeople(){
        const response = await this.get('people/');
        return response.results;
    }
    
    
    async searchByPage(pageNum){
        const response = await this.get(`people/?page=${pageNum+1}`); //N.B I added one since react-router is indexed from zero
        return response.results;
    }

    async searchByName(name){
        const response = await this.get(`people/?search=${name.trim().split(' ').join('+')}`);
        return response.results;
    }


}

module.exports = StarWarsAPI;