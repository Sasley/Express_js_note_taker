const express = require('express');

const app = express();

const Port =process.env.PORT || 3001;

const html = require('./routes/html-routes')

const api = require('./routes/api-routes')

app.listen(PORT, () => console.log('SERVER started on port ${PORT'));

