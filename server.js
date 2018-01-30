const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const request=require('request');

var data = {};

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000, Amine is G');
});


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Redirect to posts
app.get('/', (req, res) => {
   res.redirect('/posts');
});

// List all posts
app.get('/posts', (req, res) => {

  request({
    uri: "http://jsonplaceholder.typicode.com/posts",
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
  }, function(error, response, body) {
    res.render('posts.ejs',{body});
    console.log(body)
    });
});



// Show the search form
app.get('/search', (req, res) => {
   res.render('search.ejs', { body: '' });
});


// Find all comments for post
app.post('/search', (req, res) => {
  var arrayFound = obj.items.filter(function(item) {
    return item.isRight == 1;
});
});
