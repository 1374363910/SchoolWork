//点击左上角跳转到最上方
$(".navbar-header>a").click(function () {
    var targetTop = jQuery(this).attr("href");
    var oldHeight = $("#page-content").scrollTop();
    console.log(targetTop);
    console.log($(targetTop).offset().top + oldHeight);
    oldHeight = $(targetTop).offset().top + oldHeight;

    if ($(targetTop).offset().top == 0) {
        return;
    }
    $("#page-content").animate({
        scrollTop: oldHeight
    }, {
        duration: 1000,
        easing: "swing"
    });
});

// 视频播放效果
$('.videolist').each(function () { //遍历视频列表
    $(this).hover(function () { //鼠标移上来后显示播放按钮
        $(this).find('.videoed').show();
    }, function () {
        $(this).find('.videoed').hide();
    });
    $(this).click(function () { //这个视频被点击后执行
        var video = $(this).attr('path');//获取视频路径
        $('.videos').html("<video id=\"video\" src=\"" + video + "\" preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video><img onClick=\"close1()\" class=\"vclose\" src=\"images/gb.png\"/>");
        $('.videos').show();
    });
});

function close1() {
    var v = document.getElementById('video');//获取视频节点
    $('.videos').hide();//点击关闭按钮关闭暂停视频
    v.pause();
    $('.videos').html();
}


