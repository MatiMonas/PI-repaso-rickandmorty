const server = require('./src/app.js');
const { conn, Episode } = require('./src/Models/index');
const { PORT } = require('./src/Utils/config');
const axios = require('axios');

conn.sync({ force: true })
    .then(() => {
        server.listen(PORT, async () => {

              

            const apiEpisodesData = await axios.get('https://rickandmortyapi.com/api/episode');
            const apiEpisodes = apiEpisodesData.data.results.map((episode) => {
                return { name: episode.name };
            });
            const dbEpisodes = await Episode.findAll();

            await Episode.bulkCreate(apiEpisodes);

            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => console.error(err));
