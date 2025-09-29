import type { RequestHandler } from './$types.js';

const pages = [
  '/',
  '/about',
  '/team',
];

export const GET: RequestHandler = () => {
  const urls = pages
    .map((page) => `<url><loc>https://thinkindianits.vercel.app${page}</loc></url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
