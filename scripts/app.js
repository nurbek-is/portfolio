var allProjects = [];

function Project (opts) {
  this.title = opts.title;
  this.language = opts.language;
  this.category = opts.category;
  this.gitHubUrl = opts.gitHubUrl;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
// $(document).ready(function(){
//   // var $newProject = $(".projectClass").clone().appendTo(".projectClassSection");
//   var projectStr = "";
//   for (var i = 0; i < allProjects.length; i++){
//     projectStr += "<article id='project1' class='projectClass'>" + allProjects[i].title + "<br>"
//     +  allProjects[i].language + ", " + "<br>" +
//     allProjects[i].category + '<br>' + allProjects[i].publishedOn + "<br>" + ", " + "<br>"
//     + allProjects[i].gitHubUrl + allProjects[i].body + "<br>" + "<" + '/' + 'article' + ">" + "<br>";
//     $(".projectClassSection").append(projectStr);
//     projectStr = "";
//   }
// });

Project.prototype.toHtml = function () {
    var $newProject = $('article.article-class').clone();
   $newProject.removeClass('article-class');
    $newProject.find('h1').html(this.title);
    $newProject.find('h2').html(this.language);
    $newProject.data('category', this.category);
    $newProject.find('a.atag').attr('href',this.gitHubUrl);
    $newProject.find('section.body-class').html(this.body);
   return $newProject;
};
sourceProjects.forEach(function(project) {
  allProjects.push(new Project(project));
});
allProjects.forEach(function(p) {
  $('.projectClassSection').append(p.toHtml());
});

// var projectView = {};
//
// projectView.populateFilters = function() {
//   $('section.projectClassSection').each(function() {
//     var titleName, category, optionTag;
//     titleName = allProjects[i].title
//     console.log(titleName)
//     // $(this).find('address a').text();
// });
// };
// projectView.populateFilters();
