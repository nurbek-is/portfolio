var projectView = {};

projectView.populateFilters = function() {
  $('article').each(function() {
    var languageName, categoryName, optionTag;
    languageName = $(this).find('h2').text();
    categoryName = $(this).find('h3').text();
    console.log(categoryName);
    optionTag = '<option value="'+ languageName + '">' + languageName + '</option>';
     $('#language-filter').append(optionTag);
     optionTag = '<option value="'+ categoryName + '">' + categoryName + '</option>';
      $('#category-filter').append(optionTag)
  });
};

projectView.handleLanguageFilter = function () {
  $('#language-filter').on('change', function () {
    if($(this).val())  {
      console.log($(this).val());
      $('article').hide();
      var value = $(this).val();
      console.log(value);
      $('article[data-language="' + value + '"]').fadeIn();
    }
  })
}
projectView.populateFilters();
projectView.handleLanguageFilter();
