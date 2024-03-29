const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');
 
const app = express();
 
app.use(logger('dev'));
app.use(express.json({ strict: false }));

const clientDirectory = path.join(__dirname, '..', 'client', 'dist');

 // Configure both serve-favicon & static middleware
 // to serve from the production 'build' folder
 app.use(favicon(path.join(clientDirectory, 'favicon.ico')));
 app.use(express.static(clientDirectory));
 app.use(require('./config/checkToken'));

 // Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'))

const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/quests', ensureLoggedIn, require('./routes/api/quests'))
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(clientDirectory, 'index.html'));
});

 const port = process.env.PORT || 3001;
	
 app.listen(port, function() {
   console.log(`Express app running on port ${port}`)
 });