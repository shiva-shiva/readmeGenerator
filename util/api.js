const axios = require ('axios');

const api = {
    async getUser(Response){
        try{
            let response = await axios.get(`https://api.github.com/users/${Response.username}`);
            return response.data
        }catch (error) {
            console.log(error);
          }
    }
}

module.exports = api;