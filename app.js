const express = require('express');
const app = express();
const port = 3000;

// خدمة الملفات الثابتة (مثل HTML, CSS)
app.use(express.static('public'));

// تعريف مسار رئيسي
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// بدء الخادم
app.listen(port, () => {
  console.log(`التطبيق يعمل على http://localhost:${port}`);
});