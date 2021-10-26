const axios = require('axios')

const getCharacters = async(req, res) => {
  
  const {name} = req.query 

//   if(name){

//   }
    try{
        console.log('entre')
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        const result = response.data.results.map(el => {
            return {
                id: el.id,
                name: el.name,
                image: el.image,
                episode: el.episode.map(ep=> ep)
            }
        })
        res.json(result).sendStatus(200)
    }catch(err){
        console.error(err)
    }

}
module.exports = getCharacters