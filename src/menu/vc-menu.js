jQuery.getScript("./jquery.meanmenu/jquery.meanmenu.min.js")
	.done(function() {
		console.log('meanmenu loaded');
	})
	.fail(function() {
		console.log('meanmenu dont load');
});

//for menu1
$(document).ready(function () {
    $('.vc-class-menu1 .main-menu').meanmenu({
        meanScreenWidth: "992",
        meanMenuContainer: ".mobile-menu",
    });

    var scroll = $('div').width();
    if(scroll >= 992) {
        var height = $('.vc-class-menu1 .main-menu > ul > li .sub-menu li .sub-menu');
        var height2 = height.height();
        var $content = $('.vc-class-menu1 .main-menu > ul > li .sub-menu');
        $content.height(height2);
    }

    $('.vc-class-menu1 .main-menu > ul > li').hover(function(){
        $(this).find('.sub-menu > li:first-child > .sub-menu').css('visibility', 'visible');
    },function(e) {
        $(this).find('.sub-menu > li:first-child > .sub-menu').css('visibility', 'hidden');
    });
        
});