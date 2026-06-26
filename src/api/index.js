const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Risk feed data store
let feeds = {};

// GET /api/protocols - List all protocols
app.get('/api/protocols', (req, res) => {
  res.json({ protocols: Object.keys(feeds) });
});

// GET /api/protocols/:id - Get protocol details with all feed ratings
app.get('/api/protocols/:id', (req, res) => {
  const protocol = feeds[req.params.id];
  if (!protocol) return res.status(404).json({ error: 'Protocol not found' });
  res.json(protocol);
});

// GET /api/feeds - List all risk feed sources
app.get('/api/feeds', (req, res) => {
  const sources = new Set();
  Object.values(feeds).forEach(p => {
    Object.keys(p.ratings || {}).forEach(f => sources.add(f));
  });
  res.json({ feeds: Array.from(sources) });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
