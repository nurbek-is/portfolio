var allProjects = [];
var allProjectString = [];

function Project (opts) {
  this.title = opts.title;
  this.author = opts.author;
  this.category = opts.category;
  this.gitHubUrl = opts.gitHubUrl;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
$(document).ready(function(){
  $(".projectClass").clone().appendTo(".projectClassSection");
  $(".projectClass").clone().appendTo(".projectClassSection");
});

Project.prototype.toHtml = function () {
  // var $newProject = $("#projectSection").clone().apendTo("body");

  // $('article.projectClass').clone();
  // $newProject.data('category', this.category);
  // $newProject.find('h1').text(this.title);
  // return $newProject;
};
sourceProjects.forEach(function(project) {
  new Project(project).toHtml();
  allProjects.push(project);
});

for (var i = 0; i < allProjects.length; i++){
  var projectStr = allProjects[i].title + ", " + "<br>" +  allProjects[i].author + ", " + "<br>" +
  allProjects[i].category + ", " + "<br>" + allProjects[i].gitHubUrl;
  console.log (projectStr)
  $('#divResults').html(projectStr);
};