(function(){
    "use strict";
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

})();