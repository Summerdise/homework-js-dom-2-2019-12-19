var fixBox = document.getElementsByClassName("fixBox")[0];
var movingBox = document.getElementsByClassName("movingBox")[0];
var totalBox = document.getElementsByClassName("totalBox")[0];

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
        if (outOfRange(rangeLeft, rangeTop)) {
            movingBox.style.left = rangeControl(rangeLeft, rangeTop)[0];
            movingBox.style.top = rangeControl(rangeLeft, rangeTop)[1];
        }
        if (touchOthers(rangeLeft, rangeTop)) {
            fixBox.style.backgroundColor = "blue";
        }
    }

}
document.onmouseup = function() {
    document.onmousemove = null;
    document.onmousedown = null;
}

function outOfRange(leftPosition, topPosition) {
    if (leftPosition < 0 || leftPosition > 920 || topPosition < 0 || topPosition > 720) {
        return true;
    }
    return false;
}

function rangeControl(leftPosition, topPosition) {
    var rangeReturn = [];
    rangeReturn[0] = leftRangeControl(leftPosition);
    rangeReturn[1] = topRangeControl(topPosition);
    return rangeReturn;
}

function leftRangeControl(leftPosition) {
    if (leftPosition < 0) {
        return "0px";
    } else if (leftPosition > 920) {
        return "920px";
    } else {
        return leftPosition + "px"
    }
}

function topRangeControl(topPosition) {
    if (topPosition < 0) {
        return "0px";
    } else if (topPosition > 720) {
        return "720px";
    } else {
        return topPosition + "px"
    }
}

function touchOthers(leftPosition, topPosition) {
    if (leftPosition > 220 && leftPosition < 380 && topPosition > 120 && topPosition < 280) {
        return true;
    }
    return false;
}