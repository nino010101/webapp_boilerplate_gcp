import express from 'express';

const app: express.Express = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send(`<h1>this is express + ts boiler plate</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
