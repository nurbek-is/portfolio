var allProjects = [];
var allProjectString = [];

function Project (opts) {
  this.title = opts.title;
  this.language = opts.language;
  this.category = opts.category;
  this.gitHubUrl = opts.gitHubUrl;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
$(document).ready(function(){
  // $(".projectClass").clone().appendTo(".projectClassSection");
  // $(".projectClass").clone().appendTo(".projectClassSection");
});

Project.prototype.toHtml = function () {
  //  var $newProject = $(".projectClass").clone().appendTo(".projectClassSection");
  //  $newProject.data('category', this.category);
  // $newProject.find('h1').text(this.title);
  // $newProject.find('p').text(this.body);
 //   return $newProject;
};
sourceProjects.forEach(function(project) {
  new Project(project).toHtml();
  allProjects.push(project);
});


for (var i = 0; i < allProjects.length; i++){

 $(".projectClass").clone().appendTo(".projectClassSection");

  var projectStr = allProjects[i].title + ", " + "<br>" +  allProjects[i].language + ", " + "<br>" +
  allProjects[i].category + ", " + "<br>" + allProjects[i].gitHubUrl + "<br>";
  console.log (projectStr)
   $('.projectClassSection').append(projectStr);
};
