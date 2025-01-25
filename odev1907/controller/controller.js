const connection = require('../database');









// lale satış oranlarını dönen fonksiyon 
exports.getLalesales = (req, res) => {
  connection.query(`
    SELECT 
    DATE_FORMAT(date, '%Y-%m') AS month, 
    SUM(piece) AS total_sales
FROM 
    sales
WHERE 
    product_name = 'lale'
GROUP BY 
    DATE_FORMAT(date, '%Y-%m')
ORDER BY 
    month;');
  `, (err, results) => {
    if (err) {
      console.error('Veritabanı sorgusu sırasında hata oluştu: ' + err.stack);
      res.status(500).json({ error: 'Veritabanı hatası' });
      return;
    }
    res.json(results);
  });
};

// nergiz satış oranlarını dönen fonksiyon 
exports.getNergizsales = (req, res) => {
  connection.query(`
    SELECT 
    DATE_FORMAT(date, '%Y-%m') AS month, 
    SUM(piece) AS total_sales
FROM 
    sales
WHERE 
    product_name = 'nergiz'
GROUP BY 
    DATE_FORMAT(date, '%Y-%m')
ORDER BY 
    month;
  `, (err, results) => {
    if (err) {
      console.error('Veritabanı sorgusu sırasında hata oluştu: ' + err.stack);
      res.status(500).json({ error: 'Veritabanı hatası' });
      return;
    }
    res.json(results);
  });
};



  

// papatya satış oranlarını dönen fonksiyon 
exports.getPapatyaSales = (req, res) => {
  connection.query(`
   SELECT 
    DATE_FORMAT(date, '%Y-%m') AS month, 
    SUM(piece) AS total_sales
FROM 
    sales
WHERE 
    product_name = 'papatya'
GROUP BY 
    DATE_FORMAT(date, '%Y-%m')
ORDER BY 
    month;);
  `, (err, results) => {
    if (err) {
      console.error('Veritabanı sorgusu sırasında hata oluştu: ' + err.stack);
      res.status(500).json({ error: 'Veritabanı hatası' });
      return;
    }
    res.json(results);
  });
};

// açelya satış oranlarını dönen fonksiyon
exports.getAçelyaSales = (req, res) => {
  connection.query(`
    SELECT 
    DATE_FORMAT(date, '%Y-%m') AS month, 
    SUM(piece) AS total_sales
FROM 
    sales
WHERE 
    product_name = 'açelya'
GROUP BY 
    DATE_FORMAT(date, '%Y-%m')
ORDER BY 
    month;);
  `, (err, results) => {
    if (err) {
      console.error('Veritabanı sorgusu sırasında hata oluştu: ' + err.stack);
      res.status(500).json({ error: 'Veritabanı hatası' });
      return;
    }
    res.json(results);
  });
};


