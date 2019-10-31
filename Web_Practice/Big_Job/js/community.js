var index=1;
function show_ad() {
    // var ads = document.getElementById("ad");
    if (index >= 4) {
        index = 1;
    } else {
        index++;
    }
    var src_String = "images/community/ad" + index + ".jpg";
    document.getElementById("ad").src = src_String;              
}
function onload_show_ad() {
    setInterval(show_ad,1500);
}

function liOnclick(element) {
    document.getElementById("li_one").className = "li_public_item";
    document.getElementById("li_two").className = "li_public_item";
    document.getElementById("li_three").className = "li_public_item";
    document.getElementById("li_four").className = "li_public_item";
    document.getElementById(element.id).className = "li_public_item_current";

    var mytextarea = document.getElementById("publish_textarea");
    if (element.id == "li_one") {
        mytextarea.placeholder = "有什么新鲜事想和大家分享";
    }else if (element.id == "li_two") {
        mytextarea.placeholder = "在此输入文章内容";
    }
    else if (element.id == "li_three") {
        mytextarea.placeholder = "在此添加要发布的视频";
    }
    else if (element.id == "li_four") {
        mytextarea.placeholder = "在此输入您的疑惑";
    }
}




function btnUploadOnclick() {
    var mytextarea = document.getElementById("publish_textarea");
    if (mytextarea.value != "") {
        alert("发布成功");
        mytextarea.value = "";
    } else {
        alert("请输入内容");
    }
}

function userLogon() {
    document.getElementById("btn_upload").disabled = "";
    document.getElementById("btn_upload").style.backgroundColor = "#ed4040";
    document.getElementById("btn_upload").innerHTML = "发布";  
    document.getElementById("logon").style.display = "none";   
} 