(function() {
    "use strict";

    $('li > a').click(function(event) {
	var href = event.currentTarget.getAttribute('href').slice(1);

	event.preventDefault();
	console.log(href);
	document.querySelector('a[name="' + href + '"]').scrollIntoView({
	    behavior: 'smooth'
	});
    });
})();
