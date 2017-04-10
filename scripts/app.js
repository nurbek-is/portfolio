var allProjects = [];

function Project (opts) {
  this.title = opts.title;
  this.language = opts.language;
  this.category = opts.category;
  this.gitHubUrl = opts.gitHubUrl;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
$(document).ready(function(){
  // var $newProject = $(".projectClass").clone().appendTo(".projectClassSection");
  var projectStr = "";
  for (var i = 0; i < allProjects.length; i++){
    projectStr += "<article id='project1' class='projectClass'>" + allProjects[i].title + "<br>" +  allProjects[i].language + ", " + "<br>" +
    allProjects[i].category + '<br>' + allProjects[i].publishedOn + "<br>" + ", " + "<br>" + allProjects[i].gitHubUrl + "<br>" + "<" + '/' + 'article' + ">" + "<br>";
    $(".projectClassSection").append(projectStr);
    projectStr = "";
  }
});

Project.prototype.toHtml = function () {
  //   var $newProject = $(".projectClass").clone();
  // $('section.projectClassSection').removeClass("projectClassSection");
  //  $newProject.find('h1').text(this.title);
  //  $newProject.find('section.article-body').text(this.body);
  //  return $newProject;
};
sourceProjects.forEach(function(project) {
  allProjects.push(new Project(project));
});
// allProjects.forEach(function(a) {
  // $(".projectClassSection").append(a.toHtml());
// });
