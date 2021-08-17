(function(){
    "use strict";
    var css = `
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 20px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 0;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  transform: translate(-50%, -3px);
}

input:checked + .slider {
  background-color: #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translate(150%, -3px);
  -ms-transform: translate(150%, -3px);
  transform: translate(150%, -3px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}

span {
        cursor: default;
    }
    /* front button */
.eyes {
    display: block;
    position: fixed;
    top: 50%;
    left: 0px;
    z-index: 20001;
    font-size: 36px;
    text-align: center;
    width: 0px;
    transform: translate(-30%, -50%);
    height: 0px;
    background: #ffffff55;
    border-radius: 100%;
    color: #282a2b3c;
    cursor: pointer;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    opacity: 80%;
}
.eyes:focus { outline-width: 0; }

#right_eye {
    display: none;
    left: unset;
    right: 0;
    transform: translate(-40px, -50%);
}

button:focus { outline-width: 0; }

.eye{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    box-sizing: border-box;
    border: 2px solid #000;
    position: relative;
    background: radial-gradient(at center center, #fd2312, #920205);
}
.eye:before, .eye:after{
    content: '';
    position: absolute;
    border-radius: 100%;
    box-sizing: border-box;
}
.eye:before{
    width: 60%;
    height: 60%;
    border: 2px solid #000;
    left: 50%;
    top: 50%;
    margin: -30% 0 0 -30%;
}
.eye:after{
    border: 5px solid #000;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 20001;
}

    @keyframes spin{
	    to{transform: rotate(1turn);}
    }
    .jewel{
        width: 6px;
        height: 6px;
        border-radius: 100%;
        position: absolute;
        left: 23px;
        top: 7px;
        transform: rotate(218deg);
        background-color: currentColor;
        background-color: black;
    }
    .jewel:before{
        content: '';
        position: absolute;
        width: 6px;
        top: 4px;
        left: 0px;
        height: 4px;
        border-color: currentColor;
        border-style: solid;
        border-width: 0 0 0 6px;
        border-radius: 0 0 0 100%;
        background-color: black;
    }
    #jewel2 {
        top: 34px;
        transform: rotate(28deg);
    }
    .eye {
        animation:spin 8s infinite linear;
	    transform-origin: center;
    }

#the_left_eye {
    background: #c9c8c6ba;
    animation: none;
}

/* background */
.back_ground {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20002;
    width: 100%;
    height: 100%;
    background: #11111189;
    border: none;
}
/* outer box */
.acc_box {
    min-width: 300px;
    min-height: 50px;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #d6e3ffd9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.funcs {
    background-color: #9fbbfaba;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
.func_title {
    font-size: 22px;
    line-height: 40px;
    margin-left: 8px;
    color: #7d4bc9;
}
.func_module {
    padding: 8px;
}
.quick_btn {
    display: inline-flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.quick_btn button, .mod_down_up button {
    width: 40px;
    height: 40px;
    font-size: 18px;
    border-radius: 100%;
    border: none;
    cursor: pointer;
    background-color: #d6dfff;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
}
#c_speed_value {
    text-align: center;
    width: 30px;
    display: inline-block;
}
.modify_it {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 10px;
}
.mod_down_up {
    font-size: 20px;
    padding: 2px;
    background-color: #c5e4ffdb;
    border-radius: 25px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
}
.mod_down_up button {
    background-color: #45b2ff;
    color: white;
    font-size: 26px;
}
#func2 {
    display: none;
    background-color: #fa9f9fba;
}
#func2 .func_title {
    color: #cb5353;
}
.module2 {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}
#func2 input:checked + .slider {
    background-color: #e3693a;
}
.alertText {
    font-size: 12px;
    color: #7d5656;
}
.mod2 span {
    display: block;
    font-size: 16px;
}

    #pvpBoard {
        border-radius: 15px;
        display: none;
        min-width: 100px;
        width: auto;
        position: fixed;
        left: 50%;
        top: 50%;
        background-color: #fffffeeb;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 1000;
    }
    #board_text {
        font-size: 14px;
    }
    #showinfoBTN {
        display: block;
        position: fixed;
        top: 50%;
        left: 0px;
        z-index: 20002;
        font-size: 36px;
        text-align: center;
        width: 50px;
        transform: translate(-30%, -200%);
        height: 50px;
        background: #ffffff55;
        border-radius: 100%;
        color: #282a2b3c;
        border: none;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    }
    .elf_panel {
        padding: 10px;
        background-color: #abe4ffc9;
    }
    .elf_row {
        display: flex;
        flex-direction: row;
    }
    .elf_detail {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
    }
    .elf_BTN {
        background-color: #9effdf;
        border: 0;
        border-radius: 10px;
        width: 100px;
        height: 30px;
        margin: 4px;
        box-shadow: 0 -3em 3em rgb(0 0 0 / 10%), 0.3em 0.3em 1em rgb(37 37 37 / 30%);
        cursor: pointer;
    }
    .elf_row_b button {
        background-color: #a0e9ff;
    }
    #close_elf_btn {
        position: absolute;
        right: -20px;
        top: -20px;
    }
    #the_close_elf_btn {
        border: 0;
        background-color: #eccea9f2;
        color: #acaba7;
        font-size: 30px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
    .left_info {
        box-shadow: 0 -3em 3em rgb(0 0 0 / 10%), 0.3em 0.3em 1em rgb(37 37 37 / 30%);
        padding: 8px;
        border-radius: 8px;
        background-color: #d7ffff8c;
        text-align: left;
    }
    .skills_info {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        text-align: center;
        margin: 4px 10px;
        padding: 5px;
        background-color: #dae7ff;
        border-radius: 6px;
        box-shadow: 0 -3em 3em rgb(0 0 0 / 10%), 0.3em 0.3em 1em rgb(37 37 37 / 30%);
    }
    .ab_class {
        font-size: 18px;
    }
    .ab_value {
        margin: 2px 5px;
        width: 45px;
        display: inline-block;
    }
    .valuebar {
        display: inline-flex;
        height: 15px;
        border-radius: 15px;
    }
    `,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);

        let thediv = document.createElement("div");
        thediv.innerHTML = `
        <div>
            <div class="eyes" id="left_eye"><div class="eye" id="the_left_eye"><i class="jewel"></i></div></div>
            <div class="eyes" id="right_eye"><div class="eye"><i class="jewel"></i><i class="jewel" id="jewel2"></i></div></div>
        </div>
    
        <div>
            <div class="back_ground">
                <div class="acc_box">
                    <div id="func1" class="funcs">
                        <span class="func_title">左眼：变速</span>
                        <div class="func_module">
                            <div class="quick_btn" id="q_btn_app"></div>
                            <div class="modify_it">
                                <div class="mod_down_up">
                                    <button id="speed_down">-</button>
                                    <span id="c_speed_value">10</span>
                                    <button id="speed_up">+</button>
                                </div>
                                <div class="switch_toggle">
                                    <label class="switch" id="mod_01">
                                        <input type="checkbox">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="func2" class="funcs">
                        <span class="func_title">右眼 (beta实验板块)</span>
                        <div class="func_module">
                            <div class="module2">
                                <div class="mod2">
                                    <span>开启右眼洞察PVP</span>
                                    <span class="alertText">若导致卡死，概不负责</span>
                                </div>
                                <div class="switch_toggle">
                                    <label class="switch" id="mod_02">
                                        <input type="checkbox">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        let body = document.body || document.getElementsByTagName("body")[0];
        body.appendChild(thediv);
    
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

        function addBoard() {
            var a = document.createElement("div");
            a.innerHTML = `<div id="pvpBoard">
                <div id="close_elf_btn">
                    <button id="the_close_elf_btn">×</button>
                </div>
                <span id="board_text">需要进入战斗才显示哦</span>
                <div class="elf_panel">
                    <div class="elf_row elf_row_a"> </div>
                    <div class="elf_row elf_row_b"> </div>
                </div>
                <div class="elf_detail">
                    <div class="left_info"> </div>
                    <div class="right_info"> </div>
                </div>
            </div>`
            document.body.appendChild(a);
            document.getElementById("the_close_elf_btn").addEventListener("click", function() {
                document.getElementById("pvpBoard").style.display = "none";
            })
        }
        addBoard();

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

        function listenAjax() {
            var originOpen = XMLHttpRequest.prototype.open;
            var originSend = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.open = function () {
                this.addEventListener('load', function (obj) {
                    var url = obj.target.responseURL; // obj.target -> this
                    urlCase(url);
                });
                originOpen.apply(this, arguments);
            };
    
            XMLHttpRequest.prototype.send = function () {
                originSend.apply(this, arguments);
            };
    
        }
        var urlcasetimes = 0;
    
        function urlCase(url) {
            if (url.indexOf("http://h5.kxgcw.com/1593740029/assets/ui/PC/pvpDynamicBg1/") > -1 ) {
                if (document.querySelector("#mod_01 input").checked === true) {
                    // console.log("检测到您可能点击了PVP，已自动关闭加速(如果不是，请忽略)");
                    document.querySelector("#mod_01 input").checked = false;
                }
            }
            else if (url.indexOf("http://h5.kxgcw.com/1625189626/assets/ui/PC/mainCity/mainCity.xml") > -1 && urlcasetimes === 0) {
                urlcasetimes++;
                checking();
            }
        }
    
        listenAjax();
    
        // below...
    
    class elf {
        constructor(id, name) {
            this.id = id;
            this.name = name;
            this.skills = [];
            this.ability = [];
        }
        get ID() {return this.id;}
        get NAME() {return this.name;}
        get SKILL() {return this.skills;}
        get ABI() {return this.ability;}
        addSkill(s) {
            if (this.skills.length < 8) {
                this.skills.unshift(s);
            }
        }
        setAbility(s) {
            this.ability = s;
        }
        getAll() {
            return { id: this.id, name: this.name, skills: this.skills, abiliyy: this.ability};
        }
    }
    
    class elves {
        constructor() {
            this.members = [];
            this._length = 0;
            this.lastIDX = 0;
            this.lastNAME = "";
            this.cur = 0;
        }
        get length() {
            return this._length;
        }
        addElf(eid, ename) {
            if (this.members.length <= 12) {
                let new_elf = new elf(+eid, ename);
                this.members.push(new_elf);
                this._length++;
            }
        }
        appendSkill(s) {
            if (this.members.length > 0) {
                this.members[this.members.length - 1].addSkill(s);
            }
        }
        appendAbilities(s) {
            if (this.members.length > 0) {
                this.members[this.members.length - 1].setAbility(s);
            }
        }
        locate(x, n) {
            this.lastIDX = x;
            this.lastNAME = n;
        }
        changeAbilities(ab, c) {
            let found = false;
            for (let i of this.members) {
                if (i.ID === this.lastIDX) {
                    i.setAbility(ab);
                    found = true;
                    break;
                }
            }
            if (!found) {
                for (let i of this.members) {
                    if (i.NAME === this.lastNAME) {
                        i.setAbility(ab);
                        found = true;
                        break;
                    }
                }
            }
            if (c !== undefined && this.cur === c) {
                return this.members[c];
            }
            return undefined;
        }
        getInfo(idx) {
            if (idx >= 0 && idx < this.members.length)
                return this.members[idx];
            return undefined;
        }
        getAll() {
            return this.members;
        }
    }
    
    var gMode = 0;
    var the_elves;
    var lastClick = 0;
    
    function handleMSG(msg) {
        if (msg.indexOf("==离开战斗==") >= 0 || (msg.indexOf("战斗文本信息") >=0 && (msg.indexOf("逃跑了") >=0 || msg.indexOf("战斗结束") >=0))) {
            //window.console.nativeLog("run away");
            gMode = 0;
            clearAll();
            return -1;
        }
        if (gMode === 0 && (msg.indexOf("战斗开始") >=0 || msg.indexOf("开始对战") >= 0 || msg.indexOf("进入战斗前处理") >= 0)) {
            gMode = 1; // now begin battle
        }
        else if (gMode === 1 && msg.indexOf("复制战斗回放精灵") >= 0) {
            gMode = 2; // start record
            the_elves = new elves();
        }
        else if (gMode === 2) {
            if (msg.indexOf("copy一份同样的精灵") >= 0) {
                let o = msg.split(" ");
                let eid = o[o.indexOf("name:")+2];
                let ename = o[o.indexOf("name:")+3];
                the_elves.addElf(eid, ename);
                gMode = 3; // for skills
            }
            else if (msg.indexOf("==加载战斗界面==") >= 0) {
                gMode = 5; // into battle
                displayInfo();
            }
        }
        else if (gMode === 3) {
            if (msg.indexOf("潜能上限已达") >= 0) {
                let o = msg.split(" ");
                let theskill = o[o.indexOf("潜能上限已达")-1];
                the_elves.appendSkill(theskill);
            }
            else if (msg.indexOf("临时保存的当前血量") >= 0) {
                gMode = 4; // for abilities
            }
        }
        else if (gMode === 4) {
            if (msg.indexOf("最终计算结果=") >= 0) {
                let o = msg.split(" ");
                let abls = o.slice(o.indexOf("最终计算结果=")+2, o.indexOf("最终计算结果=")+8).map(x=>+x);
                abls[0] = +o[o.indexOf("最终计算结果=")+1];
                the_elves.appendAbilities(abls);
                gMode = 2;
                if (the_elves.length >= 12) {
                    gMode = 5; // into battle
                    displayInfo();
                }
            }
        }
        else if (gMode === 5) {
            if (msg.indexOf("道具努力值加成") >= 0) {
                let o = msg.split(" ");
                let oo = o[o.indexOf("道具努力值加成")-1]
                let eid = oo.split(":")[1];
                let ename = oo.split(":")[0];
                //console.nativeLog(+eid, ename);
                the_elves.locate(+eid, ename);
                gMode = 6; // for change abilities
            }
        }
        else if (gMode === 6) {
            if (msg.indexOf("最终计算结果=") >= 0) {
                let o = msg.split(" ");
                let abls = o.slice(o.indexOf("最终计算结果=")+2, o.indexOf("最终计算结果=")+8).map(x=>+x);
                abls[0] = +o[o.indexOf("最终计算结果=")+1];
                let c = getChecked();
                let res = the_elves.changeAbilities(abls, c);
                //console.nativeLog(abls, res);
                if (res !== undefined) {
                    updateInfo(res);
                }
                gMode = 5;
            }
        }
        return 0;
    }
    
    function updateInfo(info) {
        if (wannaSee()) {
            updateValue(lastClick);
        }
    }
    
    function getChecked() { // get the checked
        return lastClick;
    }
    
    function wannaSee() { // enabled log checked?
        let a = document.querySelector("#mod_02 input");
        if (a && a.checked) {
            return true;
        }
        return false;
    }
    
    function displayInfo() {
        if (wannaSee() && the_elves !== undefined) {
            let player_a = document.getElementsByClassName("elf_row_a")[0];
            let player_b = document.getElementsByClassName("elf_row_b")[0];
            let info_all = the_elves.getAll();
            if (info_all.length < 12) {
                for (let i in info_all) {
                    let x0 = createDiv("button", "e_info_"+i, "elf_BTN", info_all[i].NAME);
                    x0.addEventListener("click", showInfo);
                    player_a.appendChild(x0);
                }
            }
            else {
                let info_a = info_all.slice(6, 12);
                let info_b = info_all.slice(0, 6);
                for (let i = 0; i < 6; i++) {
                    let x1 = createDiv("button", "e_info_"+(i+6), "elf_BTN", info_a[i].NAME);
                    let x2 = createDiv("button", "e_info_"+i, "elf_BTN", info_b[i].NAME);
                    x1.addEventListener("click", showInfo);
                    x2.addEventListener("click", showInfo);
                    player_a.appendChild(x1);
                    player_b.appendChild(x2);
                }
            }
            document.getElementById("e_info_0").click();
        }
    }
    
    function showInfo() {
        if (wannaSee() && the_elves !== undefined) {
            let info_all = the_elves.getAll();
            let idx = +(this.id.split("_")[2]);
            lastClick = idx;
            updateValue(idx);
        }
    }
    
    function updateValue(idx) {
        let info_all = the_elves.getAll();
        let skills = info_all[idx].SKILL;
        let abilities = info_all[idx].ABI;
        let sk = document.getElementsByClassName("right_info")[0];
        let ab = document.getElementsByClassName("left_info")[0];
        sk.innerHTML = "";
        ab.innerHTML = "";
        for (let i = 0; i < skills.length; i++) {
            let si = createDiv("span", undefined, "skills_info", skills[i]);
            sk.appendChild(si);
        }
        let textab = ["血量", "物攻", "物防", "特攻", "特防", "速度"];
        let colorab = ["#52b788", "#f9c74f", "#f3722c", "#00b4d8", "#0077b6", "#5e548e"];
        let tmax = Math.floor(Math.max(...abilities)/100)*100;
        for (let i = 0; i < abilities.length; i++) {
            let a0 = createDiv("div", undefined, "ab_class");
            let ai = createDiv("span", undefined, "ab_text", textab[i]);
            let aii = createDiv("span", undefined, "ab_value", abilities[i]);
            let rec = createDiv("div", undefined, "valuebar");
            rec.style.width = Math.floor(abilities[i]*100/tmax).toString() + "px";
            rec.style['background-color'] = colorab[i];
            a0.appendChild(ai);
            a0.appendChild(aii);
            a0.appendChild(rec);
            ab.appendChild(a0);
        }
    }
    
    function createDiv(ty, _id, _cla, inner) {
        let a = document.createElement(ty);
        if (_id)
            a.setAttribute("id", _id);
        if (_cla)
            a.setAttribute("class", _cla);
        if (inner)
            a.innerText = inner;
        return a;
    }
    
    function clearAll() {
        //console.nativeLog("clear");
        the_elves = undefined;
        let to_clear = ["elf_row_a", "elf_row_b", "left_info", "right_info"];
        for (let i of to_clear) {
            document.getElementsByClassName(i)[0].innerHTML = "";
        }
    }
    
    function checkLog() {
        if (!Laya.Config.isShowLog) {
            Laya.Config.isShowLog = true;
        }
    }
    
    function checking() {
        let xa = document.getElementById("func2");
        if (xa !== undefined) {
            xa.style.display = "block";
        }
    
        checkLog();
        //alert("hey");
        window.console.nativeLog = window.console.log;
        //alert("hey", console.nativeLog);
        window.console.log = function(a) {
            try {
                handleMSG(a.toString());
            } catch(e) {
                window.console.nativeLog(e);
            }
        }
        //alert(console.log);
    }
    
})();