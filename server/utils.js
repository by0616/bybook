const fetch = require('node-fetch');
const cheerio = require('cheerio');

const NBA_ROOT = 'https://www.nba.com';

/**
 * Fetch HTML content from a URL
 */
const fetchHtml = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.text();
};

/**
 * Extract article links from the NBA news page
 */
const extractNewsLinks = (html) => {
  const $ = cheerio.load(html);
  const links = new Map();
  
  $('a[href^="/news/"]').each((i, el) => {
    const href = $(el).attr('href');
    const title = $(el).text().trim();
    if (href && title && !links.has(href)) {
      links.set(href, title);
    }
  });
  
  return links;
};

/**
 * Extract image from article HTML (og:image or first img tag)
 */
const extractImageFromArticle = (html) => {
  const $ = cheerio.load(html);
  const ogImage = $('meta[property="og:image"]').attr('content');
  const fallbackImage = $('img').first().attr('src');
  return ogImage || fallbackImage || null;
};

/**
 * Fetch a single article and return title, url, image
 */
const fetchArticle = async (href, title) => {
  try {
    const articleUrl = new URL(href, NBA_ROOT).href;
    const html = await fetchHtml(articleUrl);
    const image = extractImageFromArticle(html);
    return { title: title || 'NBA News', url: articleUrl, image };
  } catch (err) {
    console.error(`Failed to fetch article ${href}:`, err.message);
    return null;
  }
};

module.exports = {
  fetchHtml,
  extractNewsLinks,
  extractImageFromArticle,
  fetchArticle,
  NBA_ROOT,
};
