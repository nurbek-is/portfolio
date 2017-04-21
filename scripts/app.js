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
  var $source = $('#portfolioHandlebar').html();
  console.log($source);
  var template = Handlebars.compile($source);
  console.log(template);
  return template(this);
};

$(function(){
  $.ajax({
    url:'/scripts/data.json',
    dataType:'json',
  }).done(function(data){
    data.forEach((function (project){
      console.log('request done: ' + Date.now());
      allProjects.push(new Project(project));
    }));
    allProjects.forEach(function(p) {
      $('#handlebarSection').append(p.toHtml());
    });
  })
  console.log ('requst started:' + Date.now())
});
