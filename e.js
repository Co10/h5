(function(){
    "use strict";

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    function touchElementMove(elmnt) {
        elmnt.addEventListener('touchmove', function(e) {
            var touchLocation = e.targetTouches[0];
            elmnt.style.left = touchLocation.pageX + elmnt.style.width / 2 + 'px';
            elmnt.style.top = touchLocation.pageY + elmnt.style.height / 2 + 'px';
        })
        elmnt.addEventListener('touchend', function(e) {
            var x = parseInt(elmnt.style.left);
            var y = parseInt(elmnt.style.top);
        })
    }

    let le = document.getElementById("left_eye");
    let re = document.getElementById("right_eye");
    let l0 = document.getElementsByClassName("back_ground")[0];
    let r0 = document.getElementById("pvpBoard");

    window.onclick = function(event) {
        if (l0) {
            if (event.target === l0) {
                l0.style.display = "none";
            }
        }
    }

    if (le) {
        le.addEventListener("click", function() {
            if (l0) {
                if (l0.style.display === "none") {
                    l0.style.display = "block";
                } else {
                    l0.style.display = "none";
                }
            }
        })
        dragElement(le);
        touchElementMove(le);
    }
    if (re) {
        re.addEventListener("click", function() {
            if (r0) {
                if (r0.style.display === "none") {
                    r0.style.display = "block";
                } else {
                    r0.style.display = "none";
                }
            }
        })
        dragElement(re);
        touchElementMove(re);
    }
    if (r0) {
        dragElement(r0);
        touchElementMove(r0);
    }

    let e0 = document.querySelector("#mod_02 input");
    if (e0) {
        e0.addEventListener("change", function() {
            if (this.checked) {
                if (re) {
                    re.style.display = "block";
                }
            } else {
                if (re) {
                    re.style.display = "none";
                }
                if (r0) {
                    r0.style.display = "none";
                }
            }
        })
    }
    if (e0 && e0.checked && re) {
        re.style.display = "block";
    } else {
        re.style.display = "none";
        if (r0) {
            r0.style.display = "none";
        }
    }

})();