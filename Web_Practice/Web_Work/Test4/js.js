
function checkUserName() {
    var uPattern = /^[a-zA-Z0-9_-]{4,18}$/;
    var user_name = document.getElementsByName("user_name");
    var img = document.createElement("img");
    if (user_name[0].value != "") {
        if (uPattern.exec(user_name[0].value)) {
            img.setAttribute(src, "images/right.png");
            insertAfter(img,user_name);
        } else {

        }
    } else {
        alert("9");
        
    }
}


function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElenment) {
        parent.appendChild(newElemnet);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addLoadEvent(func) {
    var oldonLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
