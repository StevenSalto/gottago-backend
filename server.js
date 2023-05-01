const app = require('./app');

var PORT = process.env.PORT || 3000

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
