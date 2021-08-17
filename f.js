(function(){
    "use strict";
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