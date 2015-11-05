var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));


app.set('views', __dirname + '/public/pages');
app.use(express.static(__dirname + '/public'));

app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(app.get('port'), function() {
    console.log('STC server running at PORT', app.get('port'));
});

