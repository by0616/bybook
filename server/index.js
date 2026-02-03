const express = require('express');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Fetch and return latest 3 articles from nba.com/news with title, url, image
app.get('/news', async (req, res) => {
  try {
    const root = 'https://www.nba.com';
    const listRes = await fetch(`${root}/news`);
    const html = await listRes.text();
    const $ = cheerio.load(html);

    // collect links to news articles
    const anchors = new Map();
    $('a[href^="/news/"]').each((i, el) => {
      const href = $(el).attr('href');
      const title = $(el).text().trim();
      if (href && title && !anchors.has(href)) anchors.set(href, title);
    });

    const items = [];
    for (const [href, title] of anchors) {
      if (items.length >= 6) break; // collect a few then choose top 3
      try {
        const articleUrl = new URL(href, root).href;
        const aRes = await fetch(articleUrl);
        const aHtml = await aRes.text();
        const $$ = cheerio.load(aHtml);
        const ogImage = $$('meta[property="og:image"]').attr('content') || $$('img').first().attr('src') || null;
        items.push({ title: title || 'NBA News', url: articleUrl, image: ogImage });
      } catch (e) {
        // ignore individual article errors
      }
    }

    // respond with top 3 unique items
    res.json(items.slice(0, 3));
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`NBA proxy running on :${port}`));
