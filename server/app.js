import fetch from 'node-fetch';
import express from 'express';
import { URL } from 'url';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Trending API');
});

app.get('/api/repositories/:language?', async (req, res, hj) => {
  const trendingHost = 'https://gh-trending-api.herokuapp.com';

  let url = new URL(
    `${trendingHost}/repositories${req.params.language ? `/${req.params.language}` : ''}`,
  );

  if (req.query.since) {
    url.searchParams.append('since', req.query.since);
  }

  if (req.query.spoken_language_code) {
    url.searchParams.append('spoken_language_code', req.query.spoken_language_code);
  }

  const repositories = await fetch(String(url)).then((res) => res.json());

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(repositories);
});

app.get('/api/developers/:language?', async (req, res) => {
  const trendingHost = 'https://gh-trending-api.herokuapp.com';

  let url = new URL(
    `${trendingHost}/developers${req.params.language ? `/${req.params.language}` : ''}`,
  );

  if (req.query.since) {
    url.searchParams.append('since', req.query.since);
  }

  const developers = await fetch(String(url)).then((res) => res.json());

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(developers);
});

app.listen(port, () => {
  console.log(`Trending app listening at http://localhost:${port}`);
});
