const axios = require('axios');
const {Episode} = require('../Models/index');

const getEpisodes = async (req, res, next) => {
    try {
        const episodes = await Episode.findAll();
        res.json(episodes);
    } catch (err) {
        next(err);        
    }
};

const postEpisodes = async (req, res, next) => {
    const { name } = req.body;
    try {
        const episode = await Episode.create({name})
        res.json(episode)
    }catch(err){
        next(err);
    }
};

module.exports = { getEpisodes, postEpisodes };
