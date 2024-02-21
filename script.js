//드래그
var drag_idx = 10;
$(document).ready(function () {
    $(".paper")
        .draggable()
        .css('cursor', 'move')
        .mousedown(function () { // mousedown 이벤트 생성
            $(this).css('z-index', drag_idx); // 클릭한 이미지만 z-index 증가시킴
            drag_idx++;;
        });
});

//부적 랜덤위치
$(document).ready(function () {
    $(".paper").each(function () {
        var top = Math.round(Math.random() * 13) + "vh";
        var left = Math.round(Math.random() * 4.5) + "vw";
        $(this).css('top', top)
        $(this).css('left', left)
    })
});

//부적 로테이션
$(document).ready(function () {
    $(".paper").each(function () {
        var _rotate = Math.round(Math.random() * 360) + "deg";
        $(this).css({
            "transform": "rotate(" + _rotate + ")"
        });
    })
});

//텍스트 랜덤위치
$(document).ready(function () {
    $(".btn").each(function () {
        var top = Math.round(Math.random() * 80) + "vh";
        var left = Math.round(Math.random() * 80) + "vw";
        $(this).css('top', top)
        $(this).css('left', left)
    })
});

function int_1() {
    $(".intro_1").show();
    $(".intro_2").hide();
    $(".intro_3").hide();
    $(".intro_4").hide();
    $(".intro_5").hide();
    $(".intro_6").hide();
    $(".intro_7").hide();
}

function int_2() {
    $(".intro_1").hide();
    $(".intro_2").show();
    $(".intro_3").hide();
    $(".intro_4").hide();
    $(".intro_5").hide();
    $(".intro_6").hide();
    $(".intro_7").hide();
}

function int_3() {
    $(".intro_1").hide();
    $(".intro_2").hide();
    $(".intro_3").show();
    $(".intro_4").hide();
    $(".intro_5").hide();
    $(".intro_6").hide();
    $(".intro_7").hide();
}

function int_4() {
    $(".intro_1").hide();
    $(".intro_2").hide();
    $(".intro_3").hide();
    $(".intro_4").show();
    $(".intro_5").hide();
    $(".intro_6").hide();
    $(".intro_7").hide();
}

function int_5() {
    $(".intro_1").hide();
    $(".intro_2").hide();
    $(".intro_3").hide();
    $(".intro_4").hide();
    $(".intro_5").show();
    $(".intro_6").hide();
    $(".intro_7").hide();
}

function int_6() {
    $(".intro_1").hide();
    $(".intro_2").hide();
    $(".intro_3").hide();
    $(".intro_4").hide();
    $(".intro_5").hide();
    $(".intro_6").show();
    $(".intro_7").hide();
}

function int_7() {
    $(".intro_1").hide();
    $(".intro_2").hide();
    $(".intro_3").hide();
    $(".intro_4").hide();
    $(".intro_5").hide();
    $(".intro_6").hide();
    $(".intro_7").show();
}

function int_end() {
    $(".intro_1").hide();
    $(".intro_2").hide();
    $(".intro_3").hide();
    $(".intro_4").hide();
    $(".intro_5").hide();
    $(".intro_6").hide();
    $(".intro_7").hide();
}

$(document).ready(function () {
    $(".btn_1_a").css('border', '2px solid red')
    $(".btn_1_a").css('color', 'red')
    $(".text_1_a>ol").hide();
    setTimeout(int_1, 0)
    setTimeout(int_2, 200)
    setTimeout(int_3, 400)
    setTimeout(int_4, 600)
    setTimeout(int_2, 800)
    setTimeout(int_5, 1000)
    setTimeout(int_6, 1200)
    setTimeout(int_7, 1400)
    setTimeout(int_5, 1600)
    setTimeout(int_6, 1800)
    setTimeout(int_7, 2000)
    setTimeout(int_end, 2500)
    setTimeout(function () {
        $(".text_1_a>ol").show()
    }, 2500)
});




$(".btn_1_a").click(function () {
    $(".btn_1").css('color', 'white')
    $(".btn_1").css('border', '2px solid white')
    $(this).css('color', 'red')
    $(this).css('border', '2px solid red')
    $(".text_1_a>ol").hide();
    setTimeout(int_1, 0)
    setTimeout(int_2, 200)
    setTimeout(int_3, 400)
    setTimeout(int_4, 600)
    setTimeout(int_2, 800)
    setTimeout(int_5, 1000)
    setTimeout(int_6, 1200)
    setTimeout(int_7, 1400)
    setTimeout(int_5, 1600)
    setTimeout(int_6, 1800)
    setTimeout(int_7, 2000)
    setTimeout(int_end, 2500)
    setTimeout(function () {
        $(".text_1_a>ol").show()
    }, 2500)
})

$(".btn_1_b").click(function () {
    $(".btn_1").css('color', 'white')
    $(".btn_1").css('border', '2px solid white')
    $(this).css('color', 'red')
    $(this).css('border', '2px solid red')
    $(".text_1_a>ol").hide();
    setTimeout(int_1, 0)
    setTimeout(int_2, 200)
    setTimeout(int_3, 400)
    setTimeout(int_4, 600)
    setTimeout(int_2, 800)
    setTimeout(int_5, 1000)
    setTimeout(int_6, 1200)
    setTimeout(int_7, 1400)
    setTimeout(int_5, 1600)
    setTimeout(int_6, 1800)
    setTimeout(int_7, 2000)
    setTimeout(int_end, 2500)
    setTimeout(function () {
        $(".text_1_a>ol").show()
    }, 2500)
})

$(".btn_1_c").click(function () {
    $(".btn_1").css('color', 'white')
    $(".btn_1").css('border', '2px solid white')
    $(this).css('color', 'red')
    $(this).css('border', '2px solid red')
    $(".text_1_a>ol").hide();
    setTimeout(int_1, 0)
    setTimeout(int_2, 200)
    setTimeout(int_3, 400)
    setTimeout(int_4, 600)
    setTimeout(int_2, 800)
    setTimeout(int_5, 1000)
    setTimeout(int_6, 1200)
    setTimeout(int_7, 1400)
    setTimeout(int_5, 1600)
    setTimeout(int_6, 1800)
    setTimeout(int_7, 2000)
    setTimeout(int_end, 2500)
    setTimeout(function () {
        $(".text_1_a>ol").show()
    }, 2500)
})