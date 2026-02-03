const express = require('express');
const cors = require('cors');
const { getLatestNews } = require('./newsService');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
/**
 * GET /news
 * Returns latest 3 NBA news articles with title, url, and image
 */
app.get('/news', async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 3;
    const news = await getLatestNews(limit);
    res.json(news);
  } catch (err) {
    console.error('Error in /news endpoint:', err);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

/**
 * GET /health
 * Health check endpoint
 */
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🏀 NBA proxy server running on http://localhost:${port}`);
  console.log(`📰 News endpoint: GET http://localhost:${port}/news`);
});

