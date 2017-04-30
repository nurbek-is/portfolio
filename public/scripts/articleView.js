var projectView = {};

projectView.populateFilters = function() {
  $('article').each(function() {
    var languageName, categoryName, optionTag;
    languageName = $(this).find('h2').text();
    categoryName = $(this).find('h3').text();
    optionTag = '<option value="'+ languageName + '">' + languageName + '</option>';
    $('#language-filter').append(optionTag);
    optionTag = '<option value="'+ categoryName + '">' + categoryName + '</option>';
    $('#category-filter').append(optionTag)
  });
};

projectView.handleLanguageFilter = function () {
  $('#language-filter').on('change', function () {
    if($(this).val())  {
       $('article').hide();
      var value = $(this).val();
      alert('value is' + value);
      $('article[data-language="' + value + '"]').fadeIn();
    }
    else {
      $('article:not(.article-class)').show();
    }
    $('#category-filter').val('');
  })
};
projectView.handleCategoryFilter = function () {
  $('#category-filter').on('change', function () {
    if($(this).val())  {
      $('article').hide();
      alert($(this).val());
      var value = $(this).val();
      $('article[data-category="' + value + '"]').fadeIn();
    }
    else {
      $('article:not(.article-class)').show();
    }
    $('#language-filter').val('');
  })
};

projectView.initIndexPage = function() {
  projectView.populateFilters();
  projectView.handleLanguageFilter();
  projectView.handleCategoryFilter();
};
