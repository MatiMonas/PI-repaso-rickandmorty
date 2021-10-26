const server = require('./src/app.js');
const { conn } = require('./src/Models/index');
const { PORT } = require('./src/Utils/config');

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => console.error(err));
