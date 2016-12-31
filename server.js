const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const dns        = require('dns');
const async      = require('async');

const app = express();

// Set up view rendering config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home page
app.get('/', (req, res) => {
  res.render('index');
});

// DNS lookup endpoint
app.post('/getAvailableDomains', (req, res, next) => {
  const domains = req.body.domains;
  console.log('Looking up ', domains.length, ' domains');
  async.filter(domains, (domain, cb) => {
    dns.lookup(domain.trim(), (err, addr, family) => {
      if (err) { // Means the DNS lookup failed - best guess at the domains being available.
        return cb(null, true);
      }
      cb(err, false);
    });
  }, (err, results) => {
    console.log('Filtered down to ', results.length, ' domains');
    return res.json(results);
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

