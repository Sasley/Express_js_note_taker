const express = require('express');
const app = express();

const html = require('./routes/html-routes')
const api = require('./routes/api-routes')

const Port =process.env.PORT || 3001;
app.listen(PORT, () => console.log('SERVER started on port ${PORT'));

app.use(express.static)