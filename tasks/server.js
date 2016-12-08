var ls = require('live-server');

var params = {
    port: 8080,
    host: 'localhost',
    root: 'dist/',
    wait: 1000,
    mount: [['src/', './node_modules', './bower_components']],
    file: 'index.html'
}

ls.start(params)
