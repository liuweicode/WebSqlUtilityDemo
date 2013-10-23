/* ====================================================
    A Toast widget like Android
 ====================================================== */

var showToast = function(msg) {
		$("<div class='ui-loader ui-overlay-shadow ui-body-a ui-corner-all'>" + msg + "</div>").css({
		display : "block",
		opacity : 0.70,
		position : "fixed",
		padding : "10px 4px 10px 4px",
		"text-align" : "center",
		width : "270px",
		left : ($(window).width() - 284) / 2,
		top : $(window).height() / 2
	}).appendTo($.mobile.pageContainer).delay(1500).fadeOut(400, function() {
		$(this).remove();
	});
}