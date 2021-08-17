(function() {
    "use strict";

    let thet = [0.5, 1, 5, 10, 18];
    let theF = document.getElementById("q_btn_app");
    for (let i of thet) {
        let xi = document.createElement("button");
        xi.innerText = i;
        xi.addEventListener("click", function() {
            let a = document.getElementById("c_speed_value");
            if (a) {
                a.innerText = this.innerText;
            }
        })
        theF.appendChild(xi);
    }

    let sub = document.getElementById("speed_down");
    let add = document.getElementById("speed_up");
    let ltxt = document.getElementById("c_speed_value");
    sub.addEventListener("click", function() {
        let txt = +ltxt.innerText;
        if (txt <= 1) {
            txt = Math.floor(txt * 10 - 1) / 10;
            txt = Math.max(0.1, txt);
        } else {
            txt -= 1;
        }
        ltxt.innerText = txt;
    })
    add.addEventListener("click", function() {
        let txt = +ltxt.innerText;
        if (txt < 1) {
            txt = Math.floor(txt * 10 + 1) / 10;
            txt = Math.min(1, txt);
        } else {
            txt += 1;
            txt = Math.min(18, txt);
        }
        ltxt.innerText = txt;
    })

    function changeSpeed() {
        let ab = document.querySelector("#mod_01 input");
        let la = window.Laya.timer.scale;
        let vl = +document.getElementById("c_speed_value").innerText;
        if (ab !== undefined && ab.checked &&
            la !== null && la !== undefined) {
            if (vl !== 0) {
                window.Laya.timer.scale = vl;
                let leye = document.getElementById("the_left_eye");
                leye.style.background = "radial-gradient(at center center, #fd2312, #920205)";
                leye.style.animation = "spin 8s infinite linear";
            }
        }
        else {
            if (la !== null && la !== undefined) {
                window.Laya.timer.scale = 1;
                let leye = document.getElementById("the_left_eye");
                leye.style.background = "#c9c8c6ba";
                leye.style.animation = "none";
            }
        }
    }

    ltxt.addEventListener("DOMSubtreeModified", changeSpeed)
    document.querySelector("#mod_01 input").addEventListener("change", changeSpeed);
})();