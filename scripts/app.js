alert('from app.js')
var allProjects = [];

function Projects (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.gitHubUrl = opts.gitHubUrl;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone().removeClass('template')
