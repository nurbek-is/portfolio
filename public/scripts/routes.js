page.base('/basic')

page ('/', index);
page ('/about', jobs);
page('/contact', contact);
page('/contact/:contactName', contact);
page();
