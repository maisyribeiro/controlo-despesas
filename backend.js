// Backend simples Node.js para proxy de API
// Podes correr localmente: node backend.js
// Ou fazer deploy em Replit/Railway/Render

const http = require('http');
const https = require('https');
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/api/campanhas' && req.method === 'GET') {
    // Faz fetch dos dados reais
    https.get('https://dashboardmetaads-wheat.vercel.app/dashboard/campanhas', (apiRes) => {
      let data = '';

      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => {
        try {
          const json = JSON.parse(data);
          res.writeHead(200);
          res.end(JSON.stringify(json));
        } catch (e) {
          res.writeHead(500);
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
    }).on('error', (err) => {
      res.writeHead(500);
      res.end(JSON.stringify({ error: err.message }));
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
  console.log(`📊 API disponível em http://localhost:${PORT}/api/campanhas`);
});
