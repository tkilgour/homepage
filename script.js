$(document).ready(function() {
	$("#name").click(function() {
		var title = $(this),
				newTitle = title.clone(true);

		title.before(newTitle);

		$("." + title.attr("class") + ":last").remove();
	});
});