var fixBox = document.getElementsByClassName("fixBox")[0];
var movingBox = document.getElementsByClassName("movingBox")[0];

movingBox.onmousedown = function(event) {
    event = event || window.event;
    var deltaLeft = event.clientX - movingBox.offsetLeft;
    var deltaTop = event.clientY - movingBox.offsetTop;
    document.onmousemove = function(event) {
        event = event || window.event;
        var left = event.clientX;
        var top = event.clientY;
        movingBox.style.left = left - deltaLeft + "px";
        movingBox.style.top = top - deltaTop + "px";
        var rangeLeft = left - deltaLeft;
        var rangeTop = top - deltaTop;
        if (rangeLeft < 0) {
            movingBox.style.left = "0px";
        }
        if (rangeLeft > 920) {
            movingBox.style.left = "920px";
        }
        if (rangeTop < 0) {
            movingBox.style.top = "0px";
        }
        if (rangeTop > 720) {
            movingBox.style.top = "720px";
        }
        if (rangeLeft > 220 && rangeLeft < 380 && rangeTop > 120 && rangeTop < 280) {
            fixBox.style.backgroundColor = "blue";
        }


    }

}
document.onmouseup = function() {
    document.onmousemove = null;
    document.onmousedown = null;
}