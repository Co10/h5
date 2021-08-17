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
})();