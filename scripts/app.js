var allProjects = [];

function Project (opts) {
  this.title = opts.title;
  this.language = opts.language;
  this.category = opts.category;
  this.gitHubUrl = opts.gitHubUrl;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
Project.prototype.toHtml = function () {
  var $newProject = $('article.article-class').clone();
  $newProject.removeClass('article-class');
  $newProject.addClass('project1');
  $newProject.find('h1').html(this.title);
  $newProject.find('h2').html(this.language);
  $newProject.data('category', this.category);
  $newProject.find('a.atag').attr('href',this.gitHubUrl);
  $newProject.find('a.atag').text(this.gitHubUrl);
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
