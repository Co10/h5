(function(){
    "use strict";

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
})();