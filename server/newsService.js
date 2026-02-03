const { fetchHtml, extractNewsLinks, fetchArticle, NBA_ROOT } = require('./utils');

/**
 * Fetch latest news articles from NBA.com
 * Returns array of objects with { title, url, image }
 */
const getLatestNews = async (limit = 3) => {
  try {
    // Step 1: Get the news page and extract article links
    const newsPageHtml = await fetchHtml(`${NBA_ROOT}/news`);
    const articleLinks = extractNewsLinks(newsPageHtml);

    // Step 2: Fetch details (including images) for each article
    const articles = [];
    let articlesProcessed = 0;
    const maxToFetch = limit * 2; // fetch extra to account for failures

    for (const [href, title] of articleLinks) {
      if (articlesProcessed >= maxToFetch) break;
      const article = await fetchArticle(href, title);
      if (article) articles.push(article);
      articlesProcessed++;
    }

    // Step 3: Return top N results
    return articles.slice(0, limit);
  } catch (err) {
    console.error('Error fetching news:', err.message);
    return [];
  }
};

module.exports = { getLatestNews };
