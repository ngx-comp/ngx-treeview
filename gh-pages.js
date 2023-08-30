const ghpages = require('gh-pages');

ghpages.publish('dist/angular-ngx-treeview', {
  repo: 'https://' + process.env.GH_TOKEN+ '@github.com/ngx-comp/ngx-treeview.git'
}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('published gh-pages');
  }
});
