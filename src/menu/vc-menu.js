require('./jquery.meanmenu/jquery.meanmenu.min.js');

//for menu1
$(document).ready(function () {
    $('.vc-class-menu1 .mean-menu1').meanmenu({
        meanScreenWidth: "992",
        meanMenuContainer: ".mobile-vc-menu1",
    });

    var scroll = $('div').width();
    if(scroll >= 992) {
        var height = $('.vc-class-menu1 .mean-menu1 > ul > li .sub-menu li .sub-menu');
        var height2 = height.height();
        var $content = $('.vc-class-menu1 .mean-menu1 > ul > li .sub-menu');
        $content.height(height2);
    }

    $('.vc-class-menu1 .mean-menu1 > ul > li').hover(function(){
        $(this).find('.sub-menu > li:first-child > .sub-menu').css('visibility', 'visible');
    },function(e) {
        $(this).find('.sub-menu > li:first-child > .sub-menu').css('visibility', 'hidden');
    });
        
    // for menu2 
    $('.vc-class-menu2 .mean-menu2').meanmenu({
        meanScreenWidth: "992",
        meanMenuContainer: ".mobile-vc-menu2",
    });

    // for menu3
    $('.vc-class-menu3 .mean-menu3').meanmenu({
        meanScreenWidth: "1030",
        meanMenuContainer: ".mobile-vc-menu3",
    });

    $('.vc-class-menu3 .mean-menu3 > ul > li').hover(function(){
        $(this).find('.sub-menu > li:first-child > .sub-menu').css('visibility', 'visible');
    },function(e) {
        $(this).find('.sub-menu > li:first-child > .sub-menu').css('visibility', 'hidden');
    });
});