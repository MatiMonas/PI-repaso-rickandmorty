const axios = require('axios');
const {Episode} = require('../Models/index');

const getEpisodes = async (req, res) => {
    try {
        const episodes = await Episode.findAll();
        res.json(episodes);
    } catch (err) {
        res.status(500).send(err);
    }
};

const postEpisodes = async (req, res) => {
    console.log('entre')
    const { name } = req.body;
    try {
        const episode = await Episode.create({name})
        res.json(episode)
    }catch(err){
        res.status(404).send(err)
    }
};

module.exports = { getEpisodes, postEpisodes };
