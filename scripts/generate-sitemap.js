import fs from 'fs';

const baseUrl = 'https://nemvol.com';
const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/portfolio', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/faq', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' }
];

// Read projects file as text to avoid image import errors
const projectsFile = fs.readFileSync('src/data/projects.js', 'utf8');
const idRegex = /id:\s*(\d+)/g;
const projectIds = [];
let match;
while ((match = idRegex.exec(projectsFile)) !== null) {
    projectIds.push(match[1]);
}

const projectPages = projectIds.map(id => ({
    url: `/portfolio/${id}`,
    priority: '0.7',
    changefreq: 'monthly'
}));

const allPages = [...staticPages, ...projectPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
}

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');
