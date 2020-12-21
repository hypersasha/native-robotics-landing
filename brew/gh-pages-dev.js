const ghpages = require('gh-pages');

let date = new Date();
let buildData = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

ghpages.publish('dist', {
    branch: 'main',
    message: 'New dev deploy from ' + buildData,
    repo: 'https://github.com/hypersasha/nr-web-dev.git'
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('WEB DEV: Pushed successfully.');
    }
})