//点击左上角跳转到最上方
$(".navbar-header>a").click(function(){
    var targetTop=jQuery(this).attr("href");
        var oldHeight = $("#page-content").scrollTop();
        console.log(targetTop);
        console.log($(targetTop).offset().top+oldHeight);
        oldHeight = $(targetTop).offset().top+oldHeight;

        if($(targetTop).offset().top==0){
            return;
        }
        $("#page-content").animate({  
            scrollTop: oldHeight
        }, {  
            duration: 1000,  
            easing: "swing"  
        });  
});