var allJobs = [];

function Jobs (opts) {
  this.company = opts.company;
  this.title = opts.title;
  this.category = opts.category;
  this.companyUrl = opts.companyUrl;
  this.description = opts.description;
  this.years = opts.years;
}
Jobs.prototype.toHtml = function () {
  var $source = $('#jobsHandlebar').html();
  var template = Handlebars.compile($source)
  return template(this);
};

$(function(){
  $.ajax({
    url:'/data/jobs.json',
    dataType:'json',
  }).done(function(data){
    data.map((function (project){
      console.log('request done: ' + Date.now());
      allJobs.push(new Jobs(project));
    }));
    allJobs.map(function(p) {
      $('#jobshandlebarSection').append(p.toHtml());
    });
    projectView.initIndexPage();
  })
  console.log ('requst started:' + Date.now())
});
