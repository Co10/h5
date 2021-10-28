(function(){
    'use strict';
    
    let css = `
    #eye_control {
        display: block;
        position: fixed;
        left: 0;
        top: 50%;
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        z-index: 200000;
    }
    .eye{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        border: 2px solid #000;
        position: relative;
        cursor: pointer;
        background: #b6c4d378;
    }
    .eye::before, .eye::after{
        content: '';
        position: absolute;
        border-radius: 100%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
    }
    .eye::before{
        width: 70%;
        height: 70%;
        border: 1px solid #000;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    }
    .eye::after{
        border: 5px solid #000;
        left: 50%;
        top: 50%;
        -webkit-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0);
        z-index: 200001;
        -webkit-box-shadow: 0 0 4px 4px #26262685;
                box-shadow: 0 0 4px 4px #26262685;
    }
    
    .jewels {
        position: absolute;
        margin: auto;
        border-radius: 100%;
        padding: 0;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    }
    .jewel{
        width: 6px;
        height: 6px;
        border-radius: 100%;
        position: absolute;
        --circle: 18.2px;
        background-color: black;
        -webkit-transition: .2s;
        -o-transition: .2s;
        transition: .2s;
    }
    .jewel::before{
        content: '';
        position: absolute;
        width: 6px;
        height: 4px;
        border-color: black;
        border-style: solid;
        border-width: 0 0 0 4px;
        border-radius: 0 0 0 100%;
        -webkit-transform: translate(-2px,1.2px) rotate(235deg) rotateY(180deg);
        transform: translate(-2px,1.2px) rotate(235deg) rotateY(180deg);
        background-color: transparent;
    }
    .eye3 .jewel:first-child {
        top: calc(0px - var(--circle));
        left: 0;
        -webkit-transform: translate(-50%, 0) rotate(285deg);
        -ms-transform: translate(-50%, 0) rotate(285deg);
            transform: translate(-50%, 0) rotate(285deg);
    }
    .eye3 .jewel:nth-child(2) {
        top: calc(var(--circle)*0.707);
        left: calc(var(--circle)*(-0.707));
        -webkit-transform: translate(-50%, -100%) rotate(165deg);
        -ms-transform: translate(-50%, -100%) rotate(165deg);
            transform: translate(-50%, -100%) rotate(165deg);
    }
    .eye3 .jewel:nth-child(3) {
        top: calc(var(--circle)*0.707);
        left: calc(var(--circle)*0.707);
        -webkit-transform: translate(-50%, -100%) rotate(45deg);
        -ms-transform: translate(-50%, -100%) rotate(45deg);
            transform: translate(-50%, -100%) rotate(45deg);
    }
    
    @-webkit-keyframes spin{
        to{-webkit-transform: rotate(1turn);transform: rotate(1turn);}
    }
    
    @keyframes spin{
        to{-webkit-transform: rotate(1turn);transform: rotate(1turn);}
    }
    .eye {
        -webkit-animation:spin 6s infinite linear;
                animation:spin 6s infinite linear;
        -webkit-transform-origin: center;
            -ms-transform-origin: center;
                transform-origin: center;
        -webkit-animation-play-state: paused;
                animation-play-state: paused;
    }
    
    
    .eye_evo .jewel {
        background-color: white;
        top: 0 !important;
        left: 0 !important;
        /* transform: translate(-50%, -50%) !important; */
        /* transition: .2s; */
    }
    .eye_evo .jewel::before {
        -webkit-transform: translate(-2px,1.2px) rotate(247deg) rotateY(180deg);
                transform: translate(-2px,1.2px) rotate(247deg) rotateY(180deg);
    }
    
    .eye3.eye_evo .jewel:first-child {
        -webkit-transform: translate(-50%, -50%) rotate(285deg);
        -ms-transform: translate(-50%, -50%) rotate(285deg);
            transform: translate(-50%, -50%) rotate(285deg);
    }
    .eye3.eye_evo .jewel:nth-child(2) {
        -webkit-transform: translate(-50%, -50%) rotate(165deg);
        -ms-transform: translate(-50%, -50%) rotate(165deg);
            transform: translate(-50%, -50%) rotate(165deg);
    }
    .eye3.eye_evo .jewel:nth-child(3) {
        -webkit-transform: translate(-50%, -50%) rotate(45deg);
        -ms-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
    }
    .eye_evo .jewel::before {
        width: 15px;
        height: 12px;
        border-width: 0 0 0 10px;
    }
    
    .evo_eye {
        background: -o-radial-gradient(at center center, #fd2312, #920205);
        background: radial-gradient(at center center, #fd2312, #920205)
    }
    .evo_eye::after {
        border: 5px solid #ce180b;
    }
    
    
    
    
    #func_background {
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(27, 26, 26, 0.301);
        z-index: 200010;
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-size: 16px;
        color: black;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: none;
    }
    #func_body {
        display: block;
        position: fixed;
        left: 50%;
        top: 50%;
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        border-radius: 8px;
        -webkit-box-shadow: 0 0 12px 5px #a8a8a8a6;
                box-shadow: 0 0 12px 5px #a8a8a8a6;
        background-color: #96b2e6c2;
        padding: 10px;
        -webkit-box-sizing: content-box;
                box-sizing: content-box;
    }
    
    #speed_func {
        display: block;
        padding: 10px;
        border-radius: 10px;
        background-color: #6cb2f0;
        text-align: center;
        -webkit-box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
                box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    }
    .component_title_span {
        color: white;
        margin-bottom: 8px;
        display: block;
    }
    .component_title_span::before {
        content: '༺';
        font-size: 20px;
        margin-right: 4px;
    }
    .component_title_span::after {
        content: '༻';
        font-size: 20px;
        margin-left: 4px;
    }
    .speed_controller {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -ms-flex-pack: distribute;
            justify-content: space-around;
    }
    .sp_ctrl_btn {
        width: 40px;
        height: 40px;
        background-color: #a0c6fe;
        border-radius: 50%;
        text-align: center;
        margin: 6px;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        cursor: pointer;
        opacity: 0.8;
        -webkit-box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
                box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
        font-family: sans-serif;
    }
    .sp_ctrl_btn:hover, .sp_ctrl_btn:focus, .ctrl_div_btn:hover, .ctrl_div_btn:focus,
     .switch:hover, .switch:focus, #clicktomore:hover, #clicktomore:focus {
        opacity: 1;
    }
    
    .ctrl_div {
        padding: 2px;
        background-color: #c5e4ffdb;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        border-radius: 25px;
        -webkit-box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
                box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }
    .ctrl_div_btn {
        background-color: #45b2ff;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        font-family: sans-serif;
        font-size: 24px;
        -webkit-box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
                box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
        cursor: pointer;
        opacity: 0.8;
    }
    .ctrl_div_span {
        font-size: 18px;
        padding: 6px;
    }
    
    .switch_toggle {
        margin-left: 15px;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 20px;
        opacity: 0.8;
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider.round {
        border-radius: 34px;
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
        -o-transition: .4s;
        transition: .4s;
        -webkit-box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
                box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    }
    .slider.round:before {
        border-radius: 50%;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 0;
        background-color: white;
        -webkit-transition: .4s;
        -o-transition: .4s;
        transition: .4s;
        -webkit-transform: translate(-50%, -3px);
            -ms-transform: translate(-50%, -3px);
                transform: translate(-50%, -3px);
        -webkit-box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
                box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    }
    .switch input:checked + .slider {
        background-color: #2196F3;
    }
    .switch input:checked + .slider:before {
        -webkit-transform: translate(150%, -3px);
        -ms-transform: translate(150%, -3px);
        transform: translate(150%, -3px);
    }
    
    #clicktomore {
        display: block;
        border-radius: 10px;
        padding: 5px;
        background-color: #ffe1bc;
        cursor: pointer;
        text-align: center;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        margin: auto;
        margin-top: 10px;
        font-size: 14px;
        -webkit-box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
                box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
        opacity: 0.8;
    }
    
    #pvpBoardBackDiv {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .pvpBoardSpeed {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #5c8db8;
        -webkit-transform: translate(50%, 50%);
            -ms-transform: translate(50%, 50%);
                transform: translate(50%, 50%);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 12px;
        text-align: center;
        color: white;
        cursor: pointer;
    }
    #pvpforeground {
        position: fixed;
        left: 0px;
        top: 0px;
        font-size: 16px;
        z-index: 200002;
        display: none;
    }
    #pvpforeground_speed {
        position: fixed;
        left: 2px;
        top: 35%;
        background-color: #41eccdc7;
        padding: 5px;
        border-radius: 3px;
    }
    #pvpforeground_type {
        position: absolute;
        left: 2px;
        top: 10px;
        background-color: #c7dcdcc9;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
        padding: 3px;
        border-radius: 3px;
    }
    #pvpforeground_skills {
        position: fixed;
        top: 10px;
        right: 50px;
        padding: 5px;
        background-color: rgb(123 227 232 / 82%);
    }
    #pvpclickshowmore {
        position: fixed;
        left: 50%;
        top: 10px;
        background-color: #5dbfe8;
        color: white;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }
    
    
    .battle_speed_camp_li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }
    .battle_speed_camp_widget {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: center;
        font-size: 13px;
        background-color: #f49b2c;
    }
    .battle_speed_camp_widget:nth-child(2) {
        background-color: #2cf445;
    }
    .battle_speed_camp_detail {
        padding: 1px;
        border-radius: 10px;
        background-color: #ea76ffb8;
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
            -webkit-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
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
            -webkit-transform: translate(-30%, -200%);
                -ms-transform: translate(-30%, -200%);
                    transform: translate(-30%, -200%);
            height: 50px;
            background: #ffffff55;
            border-radius: 100%;
            color: #282a2b3c;
            border: none;
            -webkit-box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
                    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
        }
        .elf_panel {
            padding: 10px;
            background-color: #abe4ffc9;
        }
        .elf_row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
        }
        .elf_detail {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
            -ms-flex-pack: distribute;
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
            -webkit-box-shadow: 0 -3em 3em rgb(0 0 0 / 10%), 0.3em 0.3em 1em rgb(37 37 37 / 30%);
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
            -webkit-box-shadow: 0 -3em 3em rgb(0 0 0 / 10%), 0.3em 0.3em 1em rgb(37 37 37 / 30%);
                    box-shadow: 0 -3em 3em rgb(0 0 0 / 10%), 0.3em 0.3em 1em rgb(37 37 37 / 30%);
            padding: 8px;
            border-radius: 8px;
            background-color: #d7ffff8c;
            text-align: left;
        }
        .skills_info {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            font-size: 16px;
            text-align: center;
            margin: 4px 10px;
            padding: 5px;
            background-color: #dae7ff;
            border-radius: 6px;
            -webkit-box-shadow: 0 -3em 3em rgb(0 0 0 / 10%), 0.3em 0.3em 1em rgb(37 37 37 / 30%);
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
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            height: 15px;
            border-radius: 15px;
        }
    `;
    
    let head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    
    function createDiv(type, id, cls, innertext, father) {
        let a = document.createElement(type);
        if(id) a.setAttribute('id', id);
        if(cls) a.setAttribute('class', cls);
        if(innertext) a.innerText = innertext;
        if(father) father.appendChild(a);
        return a;
    }
    
    class Switches {
        constructor(def, name, st) {
            this.on = def;
            this.div = createDiv("div", undefined, "switch_toggle");
            let label = createDiv("label", undefined, "switch", undefined, this.div);
            this.ipt = createDiv("input", name, undefined, undefined, label);
            this.ipt.setAttribute('type', 'checkbox');
            label.setAttribute('for', name);
            let sp = createDiv("span", undefined, "slider round", undefined, label);
            if (st) {
                this.ipt.addEventListener('change', () => {
                    // console.log(this.ipt.checked);
                    st()();
                })
            }
        }
        get div_() { return this.div; }
        get status() { return this.ipt; }
        set STA(st) { this.on = st; this.ipt.checked = st; }
    }
    
    class Controls {
        constructor(def, op) {
            this.num = def;
            this.div = createDiv("div", undefined, "ctrl_div");
            this.sub = createDiv("span", undefined, "ctrl_div_btn", "-", this.div);
            this.span = createDiv("span", undefined, "ctrl_div_span", def, this.div);
            this.add = createDiv("span", undefined, "ctrl_div_btn", "+", this.div);
            if (op) {
                this.sub.addEventListener('click', () => {
                    op[0]();
                });
                this.add.addEventListener('click', () => {
                    op[1]();
                });
            }
        }
        get div_() { return this.div; }
        SetNum(n) {
            this.num = n;
            this.span.innerText = n;
        }
    }
    
    class SpeedController {
        constructor() {
            this.spConfig = [0.5, 1, 5, 10, 18];
            this.cConfig = {
                cur: 10,
                min: 0.1,
                max: 18,
            };
            this.setSp = function(num) {
                let nn = this.cConfig.cur;
                if (num) {
                    nn = +num;
                    if (nn > 18) nn = 18;
                    if (nn < 0.1) nn = 0.1;
                }
                var cx = this.cConfig;
                var that = this;
    
                function setAll() {
                    cx.cur = nn;
                    that.ctrl.SetNum(nn);
                    try {
                        let scc = document.querySelector("#eye_control .eye");
                        //console.log(scc);
                        if (that.status.status.checked) {
                            scc.style.animationPlayState = 'running';
                            scc.style.background = "radial-gradient(at center center, #fd2312, #920205)";
                            Laya.timer.scale = nn;
                        } else {
                            scc.style.animationPlayState = 'paused';
                            scc.style.background = "#b6c4d378";
                            Laya.timer.scale = 1;
                        }
                    } catch (e) {
                        console.warn(e);
                    }
                }
                return setAll;
            }
            this.op = function() {
                var cx = this.cConfig;
                var snum = this.setSp.bind(this);
                function sub() {
                    if (cx.cur > 1) cx.cur -= 1;
                    else if (cx.cur <= 1 && cx.cur > 0) {
                        cx.cur = ((cx.cur * 10) - 1)/10;
                    }
                    if (cx.cur < cx.min) cx.cur = cx.min;
                    snum(cx.cur)();
                }
                function add() {
                    if (cx.cur >= 1) cx.cur += 1;
                    else if (cx.cur < 1 && cx.cur >= 0) {
                        cx.cur = ((cx.cur * 10) + 1)/10;
                    }
                    if (cx.cur > cx.max) cx.cur = cx.max;
                    snum(cx.cur)();
                }
                return [sub, add];
            }
            this.ctrl = new Controls(10, this.op());
            this.status = new Switches(false, 'sp_switch', this.setSp.bind(this));
        }
        createDom(id) {
            let outer = createDiv("div", id);
            let textSpan = createDiv("span", undefined, "component_title_span", "变速", outer);
            let controllerDiv = createDiv("div", undefined, "speed_controller", undefined, outer);
            let nextLine = createDiv("div", undefined, "speed_controller", undefined, outer);
            for (let i of this.spConfig) {
                let spx = createDiv("span", undefined, "sp_ctrl_btn", i, controllerDiv);
                spx.addEventListener('click', () => {
                    this.setSp(i)();
                })
            }
            nextLine.appendChild(this.ctrl.div_);
            nextLine.appendChild(this.status.div_);
            return outer;
        }
        pause() { // if any bugs
            this.status.STA(false);
            this.setSp()();
        }
    }
    
    !(function() { // create eyes
        let outer = createDiv("div", "eye_control", undefined, undefined, document.body);
        let bt01 = createDiv("button", "x_eye", "eye", undefined, outer);
        let eyediv = createDiv("div", undefined, 'jewels eye3', undefined, bt01);
        for (let i = 0; i < 3; i++) {
            let eyedt = createDiv("span", undefined, "jewel", undefined, eyediv);
        }
        dragTouchELe(outer);
    }());
    
    let func_background = createDiv("div", "func_background", undefined, undefined, document.body);
    let func_body = createDiv("div", "func_body", undefined, undefined, func_background);
    
    func_background.addEventListener('click', function(e) {
        if (e.target === func_background) {
            this.style.display = 'none';
        }
    })
    var intobattle = false;
    document.getElementById("x_eye").addEventListener('click', () => {
        if (intobattle === false) {
            func_background.style.display = 'block';
        } else {
            try {
                let xx = document.getElementById("pvpforeground");
                if (xx.style.display === "none") {
                    xx.style.display = "block";
                } else {
                    xx.style.display = "none";
                }
            } catch(e) {
                console.warn(e);
            }
        }
    })
    
    let spc = new SpeedController();
    let gspc = spc.createDom("speed_func");
    
    func_body.appendChild(gspc);
    
    let morebtn = createDiv("span", 'clicktomore', undefined, '点击查看更多设置\n尚未完成，敬请期待', func_body);
    // let curst = 0;
    // morebtn.addEventListener('click', () => {////////////////////////////
    //     // let eye = document.getElementById("eye_control");
    //     let eye = document.getElementById("x_eye");
    //     if (curst === 0) {
    //         curst = 1;
    //         eye.style['animation-play-state'] = 'running';
    //         eye.setAttribute('class', 'eye evo_eye');
    //         eye.style.background = 'radial-gradient(at center center, #fd2312, #920205)';
    //         eye.children[0].setAttribute("class", 'jewels eye3 eye_evo');
    //     } else {
    //         curst = 0;
    //         eye.style['animation-play-state'] = 'paused';
    //         eye.setAttribute('class', 'eye');
    //         eye.style.background = '#b6c4d378';
    //         eye.children[0].setAttribute("class", 'jewels eye3');
    //     }
    // });
    
    
    
    // mmmmmmmmmmmmmmmmmm
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
    function dragTouchELe(ele) {
        dragElement(ele);
        touchElementMove(ele);
    }
    // mmmmmmmmmmm
    
    
    
    
    // add pvp details
    (function() {
        let a = document.createElement("div");
        a.setAttribute("id", "pvpBoardBackDiv");
        a.innerHTML = `<div id="pvpBoard">
            <div class="elf_panel">
                <div class="elf_row elf_row_a"> </div>
                <div class="elf_row elf_row_b"> </div>
            </div>
            <div class="elf_detail">
                <div class="left_info"> </div>
                <div class="right_info"> </div>
            </div>
            <div class="pvpBoardSpeed">速</div>
        </div>`
        document.body.appendChild(a);
        let b = document.getElementById("pvpBoard");
        document.addEventListener("click", function(e) {
            let xxxx = document.getElementById("pvpclickshowmore");
            let msta = 'block'
            if (!b.contains(e.target)) {
                msta = 'none';
            }
            if (xxxx && e.target === xxxx) {
                msta = 'block';
            }
            b.style.display = msta;
        });
        let c = document.getElementsByClassName("pvpBoardSpeed")[0];
        c.addEventListener("click", () => {
            let fc = document.getElementById("func_background");
            if (fc) fc.style.display = "block";
        })
        dragTouchELe(b);
    })();
    
    
    // hook Ajax event
    var urlcasetimes = 0;
    function listenAjax(callback) {
        var originOpen = XMLHttpRequest.prototype.open;
        var originSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.open = function () {
            this.addEventListener('load', function (obj) {
                var url = obj.target.responseURL; // obj.target -> this
                callback(url);
            });
            originOpen.apply(this, arguments);
        };
        XMLHttpRequest.prototype.send = function () {
            originSend.apply(this, arguments);
        };
    }
    function urlCase(url) {
        if (urlcasetimes === 0) {
            if (url.indexOf("assets/ui/PC/pvpGradeMc") >= 0 || url.indexOf("assets/ui/PC/mainCity") >= 0
                || url.indexOf("assets/ui/PC/fighting") >= 0) {
                urlcasetimes++;
                /////////
                addBattleDiv();
                checking();
                //....................
            }
        }
    }
    listenAjax(urlCase);
    // hook over
    
    class elf {
        constructor(id, name) {
            this.camp = 0;
            this.id = id;
            this.name = name;
            this.skills = [];
            this.ability = [];
        }
        get ID() {return this.id;}
        get NAME() {return this.name;}
        get SKILL() {return this.skills;}
        get ABI() {return this.ability;}
        get CAMP() { return this.camp; }
        addSkill(s) {
            if (this.skills.length < 8) {
                this.skills.unshift(s);
            }
        }
        setAbility(s) {
            this.ability = s;
        }
        setCamp(c) {
            if (c === false || c === 'false') {
                this.camp = 0;
            } else if (c === true || c === 'true') {
                this.camp = 1;
            } else {
                this.camp = c;
            }
        }
        getAll() {
            return { id: this.id, name: this.name, skills: this.skills, abiliyy: this.ability, camp: this.camp};
        }
    }
    
    class elves {
        constructor() {
            this.members = [];
            this.mine = [];
            this.yours = [];
            // this.cur = -1;
        }
        get length() {
            return this.members.length;
        }
        addElf(eid, ename) {
            let new_elf = new elf(+eid, ename);
            this.members.push(new_elf);
        }
        appendCamp(c) {
            if (this.members.length > 0) {
                this.members[this.members.length - 1].setCamp(c);
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
        sortdone() {
            for (let i of this.members) {
                if (i.CAMP === 0) {
                    this.mine.push(i);
                } else if (i.CAMP === 1) {
                    this.yours.push(i);
                }
            }
        }
        getMine() { return this.mine; }
        getYours() { return this.yours; }
        findit(a, b, v, ab) {
            if (a === 0) { // find mine
                for (let i of this.mine) {
                    let ti = i.ID;
                    if (b === 1) ti = i.NAME;
                    if (ti === v) {
                        i.setAbility(ab);
                        return true;
                    }
                }
            } else if (a === 1) { // find yours
                for (let i of this.yours) {
                    let ti = i.ID;
                    if (b === 1) ti = i.NAME;
                    if (ti === v) {
                        i.setAbility(ab);
                        return true;
                    }
                }
            }
            return false;
        }
        getEniSkillById(id) {
            for (let i of this.yours) {
                if (id === i.ID) {
                    return i.SKILL;
                }
            }
        }
        changeAbilities(ab, side, id, name) {
            let found = this.findit(side, 0, id, ab);
            if (found === false) {
                found = this.findit(side, 1, id, ab);
            }
            return found;
        }
        getSSpeed(who, id) {
            let sss = this.yours;
            if (who === 0) {
                sss = this.mine;
            }
            for (let i of sss) {
                if (id === i.ID) {
                    return i.ABI[5];
                }
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
    
    class battle {
        constructor() {
            this.curid = -1;
            this.curname = "";
            this.ef = new elves();
            this.enemyType = '';
            this.lastWho = -1;
            this.lastI = -1;
            this.curSide = -1;
        }
        CURRENT(ci, cn) { this.curid = ci; this.curname = cn; }
        addElf(a, b) { this.ef.addElf(a, b); }
        appendSkill(a) { this.ef.appendSkill(a); }
        appendCamp(c) { this.ef.appendCamp(c); }
        appendAbilities(a) { this.ef.appendAbilities(a); }
        displayInfo() { // to display all elves, speed, type, skills
            this.ef.sortdone();
            let player_a = document.getElementsByClassName("elf_row_a")[0];
            let player_b = document.getElementsByClassName("elf_row_b")[0];
            let info_a = this.ef.getYours();
            let info_b = this.ef.getMine();
            for (let i in info_a) {
                let x1 = createDiv("button", "e_info_your_"+i, "elf_BTN", info_a[i].NAME, player_a);
                x1.addEventListener("click", () => {
                    this.updateInfo(1, i);
                });
            }
            for (let i in info_b) {
                let x1 = createDiv("button", "e_info_your_"+i, "elf_BTN", info_b[i].NAME, player_b);
                x1.addEventListener("click", () => {
                    this.updateInfo(0, i);
                });
            }
            try {
                document.getElementById("e_info_your_0").click();
            } catch(e) {
                console.error(e);
            }
            // more
            // console.warn("where is a ", info_a);
            this.showEnemySkills(info_a[0].SKILL);
            // this.updateSpeed(); /////////
        }
        updateSide(s) { this.curSide = s; }
        showEnemySkills(sk) {
            try {
                document.getElementById("pvpforeground_skills").innerText = sk.join('\n');
            } catch(e) {
                console.error(e);
            }
        }
        updateSpeed() {
            try {
                if (this.curSide === 0) { // mine
                    let my_sp = document.getElementById("battle_speed_00");
                    let my_name = document.getElementById("battle_speed_name_00");
                    my_name.innerText = this.curname;
                    let csp = this.ef.getSSpeed(this.curSide, this.curid);
                    if (csp !== undefined) {
                        my_sp.innerText = csp;
                        // let smax = Math.floor(csp/30000*150);
                        // smax = Math.max(150, smax);
                        // my_sp.style.width = smax + "px";
                    }
                } else if (this.curSide === 1) { // yours
                    let your_sp = document.getElementById("battle_speed_01");
                    let your_name = document.getElementById("battle_speed_name_01");
                    your_name.innerText = this.curname;
                    let csp = this.ef.getSSpeed(this.curSide, this.curid);
                    if (csp !== undefined) {
                        your_sp.innerText = csp;
                        // let smax = Math.floor(csp/30000*150);
                        // smax = Math.max(150, smax);
                        // your_sp.style.width = smax + "px";
                        this.showEnemySkills(this.ef.getEniSkillById(this.curid));
                    }
                }
            } catch(e) {
                console.error(e);
            }
        }
        update6(abls) {
            if (this.curid !== -1) {
                // we have curSide curid curname
                let restmp = this.ef.changeAbilities(abls, this.curSide, this.curid, this.curname);
                if (restmp === true) {
                    this.updateInfo(this.lastWho, this.lastI);
                    this.updateSpeed();
                }
            }
        }
        changeEnemyType(t) {
            this.enemyType = t;
            // and more
            document.getElementById("pvpforeground_type").innerText = t;
        }
        updateInfo(who, idx) {
            this.lastWho = who;
            this.lastI = idx;
            let d = new Object();
            if (who === 0) {
                d = this.ef.getMine()[idx];
            } else if (who === 1) {
                d = this.ef.getYours()[idx];
            }
            //////////////update
            let skills = d.SKILL;
            let abilities = d.ABI;
            let sk = document.getElementsByClassName("right_info")[0];
            let ab = document.getElementsByClassName("left_info")[0];
            try {
                sk.innerHTML = "";
                ab.innerHTML = "";
                for (let i = 0; i < skills.length; i++) {
                    createDiv("span", undefined, "skills_info", skills[i], sk);
                }
                let textab = ["血量", "物攻", "物防", "特攻", "特防", "速度"];
                let colorab = ["#52b788", "#f9c74f", "#f3722c", "#00b4d8", "#0077b6", "#5e548e"];
                let tmax = Math.floor(Math.max(...abilities)/100)*100;
                for (let i = 0; i < abilities.length; i++) {
                    let a0 = createDiv("div", undefined, "ab_class", undefined, ab);
                    createDiv("span", undefined, "ab_text", textab[i], a0);
                    createDiv("span", undefined, "ab_value", abilities[i], a0);
                    let rec = createDiv("div", undefined, "valuebar", undefined, a0);
                    rec.style.width = Math.floor(abilities[i]*100/tmax).toString() + "px";
                    rec.style['background-color'] = colorab[i];
                }
            } catch(e) {
                console.error(e);
            }
        }
        clearAll() {
            this.ef = undefined;
            this.lastWho = -1;
            this.lastI = -1;
            this.curname = "";
            this.curid = -1;
            this.curSide = -1;
            let to_clear = ["elf_row_a", "elf_row_b", "left_info", "right_info"];
            for (let i of to_clear) {
                document.getElementsByClassName(i)[0].innerHTML = "";
            }
        }
    }
    
    var mybattle = new battle();
    var enitype = 0;
    
    function handleMSG(msg) {
        if (msg.indexOf("==离开战斗==") >= 0 || (msg.indexOf("战斗文本信息") >=0 && (msg.indexOf("逃跑了") >=0 || msg.indexOf("战斗结束") >=0))) {
            gMode = 0;
            enitype = 0;
            // if (mybattle && mybattle)
            mybattle.clearAll();
            return -1;
        }
        if (msg.indexOf("显示匹配窗口") >= 0) {
            return 100; // tell it to turn off speed up
        }
        if (gMode === 0 && (msg.indexOf("战斗开始") >=0 || msg.indexOf("开始对战") >= 0 || msg.indexOf("进入战斗前处理") >= 0)) {
            mybattle = new battle();
            gMode = 1; // now begin battle
            return 200;
        }
        else if (gMode === 1 && msg.indexOf("复制战斗回放精灵") >= 0) {
            gMode = 2; // start record
        }
        else if (gMode === 2) {
            if (msg.indexOf("copy一份同样的精灵") >= 0) {
                let o = msg.split(" ");
                let eid = o[o.indexOf("name:")+2];
                let ename = o[o.indexOf("name:")+3];
                mybattle.addElf(eid, ename);
                gMode = 3; // for skills
            }
            else if (msg.indexOf("==加载战斗界面==") >= 0) {
                gMode = 6; // into battle, to update info
                mybattle.displayInfo();
            }
        }
        else if (gMode === 3) { //  note:   极巨招式有bug 不显示 待修复
            if (msg.indexOf("潜能上限已达") >= 0) {
                let o = msg.split(" ");
                let theskill = o[o.indexOf("潜能上限已达")-1];
                mybattle.appendSkill(theskill);
            }
            else if (msg.indexOf("临时保存的当前血量") >= 0) { // the end
                gMode = 4; // for camp side
            }
        }
        else if (gMode === 4) {
            if (msg.indexOf("ConfigConst.CAMP_OF_PLAYER=") >= 0) {
                let o = msg.split(" ");
                let side = o[o.indexOf("ConfigConst.CAMP_OF_PLAYER=")+3];
                if (side === "true") side = true;
                else if (side === "false") side = false;
                mybattle.appendCamp(side);
                gMode = 5; // for abilities
            }
        }
        else if (gMode === 5) {
            if (msg.indexOf("最终计算结果=") >= 0) {
                let o = msg.split(" ");
                let abls = o.slice(o.indexOf("最终计算结果=")+2, o.indexOf("最终计算结果=")+8).map(x=>+x);
                abls[0] = +o[o.indexOf("最终计算结果=")+1];
                mybattle.appendAbilities(abls);
                gMode = 2; // one finished
            }
        }
        else if (gMode === 6 || gMode === 7 || gMode === 8) {
            if (enitype === 0 && msg.indexOf("战斗文本信息:派出了") >= 0) {
                enitype = 1;
            }
            else if (enitype === 1 && msg.indexOf("被攻击者属性处理后") >= 0) {
                enitype = 0;
                let tmsg = '被攻击者属性处理后';
                let et = msg.substring(msg.indexOf(tmsg)+tmsg.length);
                mybattle.changeEnemyType(et);
            }
            if (gMode === 6 && msg.indexOf("ConfigConst.CAMP_OF_PLAYER=") >= 0) {
                let o = msg.split(" ");
                let side = o[o.indexOf("ConfigConst.CAMP_OF_PLAYER=")+3];
                if (side === "true" || side === true) side = 1;
                else if (side === "false" || side === false) side = 0;
    
                mybattle.updateSide(side); //
    
                gMode = 7; // for abilities update
            }
            else if (gMode === 7 && msg.indexOf("道具努力值加成") >= 0) { // update info
                let o = msg.split(" ");
                let oo = o[o.indexOf("道具努力值加成")-1];
                let eid = oo.split(":")[1];
                let ename = oo.split(":")[0];
                //console.nativeLog(+eid, ename);
    
                mybattle.CURRENT(+eid, ename);
                // the_elves.locate(+eid, ename); /////////// oh update, how???
    
                gMode = 8; // for change abilities
            }
            else if (gMode === 8 && msg.indexOf("最终计算结果=") >= 0) {
                let o = msg.split(" ");
                let abls = o.slice(o.indexOf("最终计算结果=")+2, o.indexOf("最终计算结果=")+8).map(x=>+x);
                abls[0] = +o[o.indexOf("最终计算结果=")+1];
    
                mybattle.update6(abls);
                gMode = 6;
            } ////////////////////////////////////////
        }
        return 0;
    }
    
    
    
    
    
    function checkLog() {
        if (!Laya.Config.isShowLog) {
            Laya.Config.isShowLog = true;
        }
    }
    function addBattleDiv() {
        let fa = document.getElementById("pvpBoardBackDiv");
        if (fa) {
            let fasib = createDiv("div", "pvpforeground");
            fa.appendChild(fasib);
            // create children
            let f_speed = createDiv("div", "pvpforeground_speed", undefined, undefined, fasib);
            addBattleSpeedDiv(f_speed);
            let f_type = createDiv("div", "pvpforeground_type", undefined, "属性", fasib);
            let f_skills = createDiv("div", "pvpforeground_skills", undefined, undefined, fasib);
            // addBattleSkillsDiv(f_skills);
            let clicktoshowmorebutton = createDiv("div", "pvpclickshowmore", undefined, "more", fasib);
            clicktoshowmorebutton.addEventListener('click', () => {
                let mb = document.getElementById("pvpBoard");
                if (mb) {
                    mb.style.display = "block";
                }
            })
        }
    }
    function addBattleSpeedDiv(father) { //
        let your_li = createDiv("div", undefined, "battle_speed_camp_li", undefined, father);
        let your_span = createDiv("span", undefined, "battle_speed_camp_widget", "敌", your_li);
        createDiv("span", "battle_speed_name_01", "battle_speed_camp_name_detail", "?", your_li);
        let your_sp = createDiv("span", "battle_speed_01", "battle_speed_camp_detail", "1", your_li);
    
        let my_li = createDiv("div", undefined, "battle_speed_camp_li", undefined, father);
        let my_span = createDiv("span", undefined, "battle_speed_camp_widget", "我", my_li);
        createDiv("span", "battle_speed_name_00", "battle_speed_camp_name_detail", "?", my_li);
        let my_sp = createDiv("span", "battle_speed_00", "battle_speed_camp_detail", "1", my_li);
    }
    
    function offSpeedUp() {
        try {
            document.getElementById("sp_switch").checked = false;
            Laya.scale.timer = 1;
            disableEyes();
        } catch(e) {
            console.warn(e);
        }
    }
    function enableEyes() {
        let eye = document.getElementById("x_eye");
        try {
            eye.style['animation-play-state'] = 'running';
            eye.setAttribute('class', 'eye evo_eye');
            eye.style.background = 'radial-gradient(at center center, #fd2312, #920205)';
            eye.children[0].setAttribute("class", 'jewels eye3 eye_evo');
        } catch(e) {
            console.error(e);
        }
    }
    function disableEyes() {
        let eye = document.getElementById("x_eye");
        try {
            eye.style['animation-play-state'] = 'paused';
            eye.setAttribute('class', 'eye');
            eye.style.background = '#b6c4d378';
            eye.children[0].setAttribute("class", 'jewels eye3');
        } catch(e) {
            console.error(e);
        }
    }
    
    function openCONFIGANDEDIT() {
        try {
            Laya.Config.isFullScreen = true;
            Laya.stage.scaleMode='showall';
            Laya.Config.isOpenAni = false;
            Laya.Config.isOpenFightingAni = false;
        } catch(e) {
            console.warn(e);
        }
    }
    
    function checking() {
        openCONFIGANDEDIT();
    
        checkLog();
        //alert("hey");
        window.console.nativeLog = window.console.log;
        //alert("hey", console.nativeLog);
        window.console.log = function(a) {
            try {
                let xr = handleMSG(a.toString());
                if (xr === 100) { // disable speed up
                    offSpeedUp();
                } else if (xr === 200) { // into battle
                    intobattle = true;
                    enableEyes();
                } else if (xr === -1) { // battle over
                    intobattle = false;
                    disableEyes();
                    document.getElementById("pvpforeground").style.display = "none";
                }
            } catch(e) {
                console.warn(e);
            }
        }
        //alert(console.log);
    }
    
    })();