const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/router');

const hostname = '127.0.0.1';
const port = 5001;

// Statik dosyaları sunma
app.use(express.static(path.join(__dirname, 'public'))); // CSS ve diğer statik dosyaları sunar

// Ana sayfa
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API yönlendirmeleri
app.use('/api', routes);

// Sunucu başlatma
app.listen(port, hostname, () => {
  console.log(`Sunucu çalışıyor: http://${hostname}:${port}/`);
});
